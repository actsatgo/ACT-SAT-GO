import { useEffect, useRef, useState } from 'react';

type Option = { value: string; label: string };

// Single-choice dropdown for the dark booking forms; replaces the native select,
// whose open list cannot be styled to match the navy card.
export function DarkSelect({
  id,
  value,
  options,
  onChange,
  className = '',
  ariaLabel,
}: {
  id?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const current = options.find((o) => o.value === value);
  return (
    <div
      className={`dark-select ${className}`.trim()}
      ref={ref}
      onKeyDown={(e) => {
        // Escape closes the menu without also closing the booking pop-up
        if (e.key === 'Escape' && open) {
          e.stopPropagation();
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        id={id}
        className={`c-input dark-select-toggle${open ? ' is-open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{current ? current.label : ''}</span>
      </button>
      {open && (
        <div className="dark-select-menu" role="listbox">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              role="option"
              aria-selected={o.value === value}
              className={`dark-select-option${o.value === value ? ' is-selected' : ''}`}
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export const PHONE_CODE_OPTIONS: Option[] = [
  ['+1', 'US'], ['+91', 'IN'], ['+44', 'UK'], ['+971', 'AE'], ['+65', 'SG'], ['+61', 'AU'],
  ['+966', 'SA'], ['+974', 'QA'], ['+968', 'OM'], ['+965', 'KW'], ['+973', 'BH'], ['+852', 'HK'],
].map(([code, cc]) => ({ value: code, label: `${code} (${cc})` }));

export const EXAM_OPTIONS: Option[] = [
  { value: 'General', label: 'General / Other' },
  { value: 'SAT', label: 'SAT Prep' },
  { value: 'ACT', label: 'ACT Prep' },
  { value: 'AP Prep', label: 'AP Prep' },
  { value: 'K-12 Tutoring', label: 'K-12 Tutoring' },
];
