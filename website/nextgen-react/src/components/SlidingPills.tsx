import { useCallback, useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';

export interface PillItem {
  id: string;
  label: string;
  count?: number;
}

interface Glide { x: number; w: number; h: number; ghost: boolean; instant: boolean }

/**
 * A row of anchor links in a soft capsule. A white pill rests on `active` and
 * glides to the hovered link as a translucent ghost (same feel as the header nav).
 */
export function SlidingPills({ items, active, label, small }: { items: PillItem[]; active: string | null; label: string; small?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [glide, setGlide] = useState<Glide | null>(null);

  const moveTo = useCallback((el: Element | null, ghost: boolean) => {
    const track = trackRef.current;
    if (!track || !el) return setGlide(null);
    const t = track.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setGlide((g) => ({ x: r.left - t.left + track.scrollLeft, w: r.width, h: r.height, ghost, instant: !g }));
  }, []);

  const rest = useCallback(() => {
    const el = active ? trackRef.current?.querySelector(`[data-pill="${active}"]`) ?? null : null;
    moveTo(el, false);
  }, [active, moveTo]);

  useEffect(() => {
    rest();
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(() => rest());
    ro.observe(track);
    return () => ro.disconnect();
  }, [rest]);

  // On phones the row scrolls sideways: keep the active pill in view.
  useEffect(() => {
    const track = trackRef.current;
    const el = active ? track?.querySelector<HTMLElement>(`[data-pill="${active}"]`) : null;
    if (track && el && track.scrollWidth > track.clientWidth) {
      track.scrollTo({ left: el.offsetLeft - track.clientWidth / 2 + el.offsetWidth / 2, behavior: 'smooth' });
    }
  }, [active]);

  const onPointer = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    const item = (e.target as Element).closest('[data-pill]');
    if (item) moveTo(item, true);
    else rest();
  };

  return (
    <nav className={`pills${small ? ' pills--small' : ''}`} aria-label={label}>
      <div className="pills-track" ref={trackRef} onPointerOver={onPointer} onPointerLeave={rest}>
        <span
          className={`pills-glider${glide ? ' is-on' : ''}${glide?.ghost ? ' is-ghost' : ''}`}
          aria-hidden="true"
          style={glide ? { width: glide.w, height: glide.h, transform: `translateX(${glide.x}px)`, transition: glide.instant ? 'none' : undefined } : undefined}
        />
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            data-pill={it.id}
            className={`pills-item${active === it.id ? ' active' : ''}`}
            aria-current={active === it.id ? 'true' : undefined}
            onFocus={(e) => moveTo(e.currentTarget, true)}
            onBlur={rest}
          >
            {it.label}
            {it.count !== undefined && <span className="pills-count">{it.count}</span>}
          </a>
        ))}
      </div>
    </nav>
  );
}
