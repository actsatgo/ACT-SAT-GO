import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Copy, Eye, Info } from 'lucide-react';
import toast from 'react-hot-toast';
import type { DbUser } from '../../lib/api';

/**
 * The three small icons after a student's name in the student list (admin and
 * tutor), like Zuperscore: ⓘ shows the student's details on hover or tap,
 * 👁 opens their reports in the Test Report tab, and the copy icon copies their
 * email address.
 */
export function StudentQuickIcons({ studentId, name, email, student }: {
  studentId: string;
  name: string;
  email: string;
  student?: DbUser;
}) {
  const navigate = useNavigate();
  const infoRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const open = () => {
    const r = infoRef.current?.getBoundingClientRect();
    if (!r) return;
    const width = 260;
    setPos({ top: r.bottom + 6, left: Math.max(8, Math.min(r.left - 12, window.innerWidth - width - 8)) });
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied');
    } catch {
      toast.error('Could not copy the email');
    }
  };

  const fmtDate = (d?: string | null) => (d ? new Date(d).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) : null);
  const rows: [string, string | number | null | undefined][] = [
    ['Email', email],
    ['Phone', student?.phone],
    ['Parent phone', student?.parentPhone],
    ['School', student?.schoolName],
    ['Grade', student?.grade],
    ['Target score', student?.targetScore],
    ['Target date', fmtDate(student?.targetDate)],
    ['Tutors', student?.tutors?.map((t) => t.name).join(', ') || student?.tutorName],
  ];

  const btn = 'p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors';

  return (
    <span className="inline-flex items-center gap-0.5 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
      <button
        ref={infoRef}
        type="button"
        className={btn}
        aria-label={`Details for ${name}`}
        onMouseEnter={open}
        onMouseLeave={() => setPos(null)}
        onClick={() => (pos ? setPos(null) : open())}
      >
        <Info size={15} />
      </button>
      <button type="button" className={btn} title="View test reports" onClick={() => navigate(`/test-report?student=${studentId}`)}>
        <Eye size={15} />
      </button>
      <button type="button" className={btn} title="Copy email" onClick={copy}>
        <Copy size={14} />
      </button>

      {pos && createPortal(
        <div
          className="fixed z-[100] w-[260px] rounded-xl border border-slate-200 bg-white p-3 text-left shadow-lg"
          style={{ top: pos.top, left: pos.left }}
        >
          <p className="mb-2 text-sm font-semibold text-slate-900">{name}</p>
          <dl className="space-y-1 text-xs">
            {rows.filter(([, v]) => v !== null && v !== undefined && v !== '').map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <dt className="w-24 flex-shrink-0 text-slate-500">{k}</dt>
                <dd className="min-w-0 break-words font-medium text-slate-800">{v}</dd>
              </div>
            ))}
          </dl>
        </div>,
        document.body,
      )}
    </span>
  );
}
