import { useEffect, useMemo, useState } from 'react';
import {
  AuthError,
  addManualReview,
  deleteManualReview,
  fetchAdminReviews,
  saveFeaturedReviews,
  setReviewHidden,
  syncGoogleReviews,
  type AdminReview,
  type ReviewSettings,
} from './api';

// Admin tab for the homepage "What Families Say on Google" section.
// Reviews marked "Show first" open the scrolling strip in the order set here;
// every other visible review follows, newest first.

function stars(n: number) {
  return '★★★★★'.slice(0, Math.round(n)) + '☆☆☆☆☆'.slice(0, 5 - Math.round(n));
}

function when(iso?: string) {
  if (!iso) return 'never';
  const d = new Date(iso);
  return d.toLocaleString(undefined, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

const EMPTY_FORM = { author: '', text: '', rating: 5, relativeTime: '' };

export function AdminGoogleReviews({ onAuthError }: { onAuthError: () => void }) {
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [settings, setSettings] = useState<ReviewSettings>({});
  const [configured, setConfigured] = useState(false);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  const handle = (err: unknown) => {
    if (err instanceof AuthError) return onAuthError();
    setError(err instanceof Error ? err.message : 'Something went wrong');
  };

  const load = async () => {
    try {
      const data = await fetchAdminReviews();
      setReviews(data.reviews);
      setSettings(data.settings || {});
      setConfigured(data.configured);
      setError('');
    } catch (err) {
      handle(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const featured = useMemo(
    () => reviews.filter((r) => r.featured).sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    [reviews]
  );

  const saveFeatured = async (ids: string[]) => {
    const prev = reviews;
    setReviews((cur) => cur.map((r) => ({ ...r, featured: ids.includes(r.id), order: ids.includes(r.id) ? ids.indexOf(r.id) : null })));
    try {
      await saveFeaturedReviews(ids);
    } catch (err) {
      setReviews(prev);
      handle(err);
    }
  };

  const toggleFeatured = (r: AdminReview) => {
    const ids = featured.map((f) => f.id);
    saveFeatured(r.featured ? ids.filter((id) => id !== r.id) : [...ids, r.id]);
  };

  const move = (index: number, dir: -1 | 1) => {
    const ids = featured.map((f) => f.id);
    const to = index + dir;
    if (to < 0 || to >= ids.length) return;
    [ids[index], ids[to]] = [ids[to], ids[index]];
    saveFeatured(ids);
  };

  const toggleHidden = async (r: AdminReview) => {
    setReviews((cur) => cur.map((x) => (x.id === r.id ? { ...x, hidden: !r.hidden } : x)));
    try {
      await setReviewHidden(r.id, !r.hidden);
    } catch (err) {
      setReviews((cur) => cur.map((x) => (x.id === r.id ? { ...x, hidden: r.hidden } : x)));
      handle(err);
    }
  };

  const remove = async (r: AdminReview) => {
    const prev = reviews;
    setReviews((cur) => cur.filter((x) => x.id !== r.id));
    try {
      await deleteManualReview(r.id);
    } catch (err) {
      setReviews(prev);
      handle(err);
    }
  };

  const sync = async () => {
    setSyncing(true);
    setNotice('');
    setError('');
    try {
      const res = await syncGoogleReviews();
      setNotice(res.added ? `Synced. ${res.added} new review${res.added === 1 ? '' : 's'} added from Google.` : 'Synced. No new reviews on Google since the last sync.');
      await load();
    } catch (err) {
      handle(err);
    } finally {
      setSyncing(false);
    }
  };

  const submitAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const created = await addManualReview(form);
      setReviews((cur) => [created, ...cur]);
      setForm(EMPTY_FORM);
      setShowAdd(false);
    } catch (err) {
      handle(err);
    }
  };

  const shown = reviews.filter((r) => !r.hidden).length;

  return (
    <div className="agr">
      <div className="admin-stats">
        <div className="admin-stat is-total"><strong>{reviews.length}</strong><span>Stored reviews</span></div>
        <div className="admin-stat is-pending"><strong>{featured.length}</strong><span>Shown first</span></div>
        <div className="admin-stat"><strong>{shown}</strong><span>Visible on site</span></div>
        <div className="admin-stat"><strong>{settings.rating ? `${settings.rating} ★` : '–'}</strong><span>{settings.total ? `${settings.total} Google reviews` : 'Google rating'}</span></div>
      </div>

      <div className={`agr-status${configured ? '' : ' is-off'}`}>
        <div>
          {configured ? (
            <>
              <strong>Connected to Google.</strong> New reviews are pulled in automatically every 6 hours. Last sync: {when(settings.lastSync)}.
              {settings.lastError && <span className="agr-warn"> Last attempt failed: {settings.lastError}</span>}
            </>
          ) : (
            <>
              <strong>Google sync is not set up yet.</strong> Add <code>GOOGLE_PLACES_API_KEY</code> and <code>GOOGLE_PLACE_ID</code> in Vercel → Settings → Environment Variables, then redeploy. Until then you can add reviews by hand.
            </>
          )}
        </div>
        <div className="agr-status-actions">
          <button type="button" className="admin-add-btn agr-ghost" onClick={sync} disabled={syncing || !configured}>
            {syncing ? 'Syncing…' : 'Sync from Google now'}
          </button>
          <button type="button" className="admin-add-btn" onClick={() => { setForm(EMPTY_FORM); setShowAdd(true); }}>+ Add Review</button>
        </div>
      </div>

      {notice && <div className="agr-notice">{notice}</div>}
      {error && <div className="admin-error">{error}</div>}

      <h3 className="agr-h">Shown first <span>in this order, then the rest keep scrolling</span></h3>
      {featured.length === 0 ? (
        <p className="agr-empty">Nothing picked yet. Use “Show first” on any review below.</p>
      ) : (
        <ol className="agr-featured">
          {featured.map((r, i) => (
            <li key={r.id}>
              <span className="agr-pos">{i + 1}</span>
              <div className="agr-body">
                <strong>{r.author}</strong> <span className="agr-stars">{stars(r.rating)}</span>
                <p>{r.text}</p>
              </div>
              <div className="agr-btns">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move up">↑</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === featured.length - 1} aria-label="Move down">↓</button>
                <button type="button" onClick={() => toggleFeatured(r)}>Remove</button>
              </div>
            </li>
          ))}
        </ol>
      )}

      <h3 className="agr-h">All reviews</h3>
      {loading ? (
        <p className="agr-empty">Loading…</p>
      ) : (
        <ul className="agr-list">
          {reviews.map((r) => (
            <li key={r.id} className={r.hidden ? 'is-hidden' : undefined}>
              <div className="agr-body">
                <div className="agr-line">
                  <strong>{r.author}</strong>
                  <span className="agr-stars">{stars(r.rating)}</span>
                  <span className={`agr-tag ${r.source}`}>{r.source === 'google' ? 'Google' : 'Added by hand'}</span>
                  {r.relativeTime && <span className="agr-time">{r.relativeTime}</span>}
                  {r.hidden && <span className="agr-tag hidden">Hidden</span>}
                </div>
                <p>{r.text}</p>
              </div>
              <div className="agr-btns">
                <button type="button" className={r.featured ? 'on' : undefined} onClick={() => toggleFeatured(r)} disabled={r.hidden}>
                  {r.featured ? '★ Shown first' : '☆ Show first'}
                </button>
                <button type="button" onClick={() => toggleHidden(r)}>{r.hidden ? 'Show' : 'Hide'}</button>
                {r.source === 'manual' && <button type="button" className="danger" onClick={() => remove(r)}>Delete</button>}
              </div>
            </li>
          ))}
        </ul>
      )}

      {showAdd && (
        <div className="admin-modal-backdrop" onClick={() => setShowAdd(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Add a Review</h2>
              <button className="admin-modal-close" onClick={() => setShowAdd(false)}>✕</button>
            </div>
            <form onSubmit={submitAdd} className="admin-modal-form">
              <div className="admin-form-row">
                <div className="admin-form-field">
                  <label htmlFor="agr-author">Reviewer name *</label>
                  <input id="agr-author" type="text" value={form.author} onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))} required />
                </div>
                <div className="admin-form-field">
                  <label htmlFor="agr-rating">Stars</label>
                  <select id="agr-rating" value={form.rating} onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value) }))}>
                    {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} ★</option>)}
                  </select>
                </div>
              </div>
              <div className="admin-form-field">
                <label htmlFor="agr-when">When (e.g. “3 months ago”)</label>
                <input id="agr-when" type="text" value={form.relativeTime} onChange={(e) => setForm((f) => ({ ...f, relativeTime: e.target.value }))} />
              </div>
              <div className="admin-form-field">
                <label htmlFor="agr-text">Review text *</label>
                <textarea id="agr-text" rows={6} value={form.text} onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))} required />
              </div>
              <div className="admin-modal-footer">
                <button type="submit" className="admin-btn-primary">Add Review</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
