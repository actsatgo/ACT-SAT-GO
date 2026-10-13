import { Fragment, useEffect, useMemo, useState } from 'react';
import { ClipboardCheck, Loader2, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { api, type PtmStudent } from '../lib/api';
import { useAuthStore } from '../store/useAuthStore';
import { Button } from '../components/common/Button';
import { PtmReportList, PrepStatusBadge, UpdatePtmModal, fmtDate } from '../components/ptm/PtmReports';

/**
 * PTM Reports. Admins see every student and add reports with "Update PTM
 * report"; tutors see their assigned students' reports; students see their own.
 */
export function PTMReportsPage() {
  const { user } = useAuthStore();
  const isStudent = user?.role === 'student';
  const isAdmin = user?.role === 'admin' || user?.role === 'super_admin';

  const [students, setStudents] = useState<PtmStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<string | null>(null);
  const [editing, setEditing] = useState<PtmStudent | null>(null);

  useEffect(() => {
    api.getPtmReports()
      .then((r) => setStudents(r.students))
      .catch(() => setStudents([]))
      .finally(() => setLoading(false));
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q ? students.filter((s) => s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q)) : students;
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [students, query]);

  const onSaved = (studentId: string, reports: PtmStudent['reports']) => {
    setStudents((prev) => prev.map((s) => (s.id === studentId ? { ...s, reports } : s)));
    setOpen(studentId);
  };

  const header = (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <ClipboardCheck size={20} className="text-blue-600" />
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">PTM Reports</h1>
      </div>
      <p className="text-sm text-slate-500">
        {isStudent
          ? 'Your parent-teacher meeting reports, latest first.'
          : isAdmin
            ? 'Every student with their latest PTM. Click Update PTM report to add a new one.'
            : 'PTM reports of your students, latest first.'}
      </p>
    </div>
  );

  if (loading) {
    return (
      <div className="space-y-5">
        {header}
        <div className="flex items-center justify-center h-32 gap-2 text-slate-400 text-sm">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      </div>
    );
  }

  if (isStudent) {
    return (
      <div className="space-y-5">
        {header}
        <PtmReportList reports={students[0]?.reports ?? []} empty="No PTM report yet." />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <Toaster position="top-right" />
      {header}

      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search students"
          className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100" />
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3">Student</th>
              <th className="px-4 py-3">Last PTM</th>
              <th className="px-4 py-3">Prep status</th>
              <th className="px-4 py-3">Target test date</th>
              <th className="px-4 py-3">Mocks completed</th>
              {isAdmin && <th className="px-4 py-3" />}
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 && (
              <tr><td colSpan={isAdmin ? 6 : 5} className="px-4 py-8 text-center text-slate-400">No students found.</td></tr>
            )}
            {shown.map((s) => {
              const latest = s.reports[0];
              const isOpen = open === s.id;
              return (
                <Fragment key={s.id}>
                  <tr className="border-b border-slate-100 hover:bg-slate-50/60">
                    <td className="px-4 py-3">
                      <button type="button" onClick={() => setOpen(isOpen ? null : s.id)}
                        className="flex items-center gap-1.5 font-semibold text-slate-900 hover:text-blue-700">
                        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        {s.name}
                        {s.reports.length > 0 && <span className="text-xs font-normal text-slate-400">({s.reports.length})</span>}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{latest ? fmtDate(latest.ptmDate) : '—'}</td>
                    <td className="px-4 py-3">{latest ? <PrepStatusBadge status={latest.prepStatus} /> : <span className="text-slate-400">—</span>}</td>
                    <td className="px-4 py-3 text-slate-700">{fmtDate(latest?.targetTestDate ?? s.targetDate)}</td>
                    <td className="px-4 py-3 text-slate-700">{s.mocksCompleted}</td>
                    {isAdmin && (
                      <td className="px-4 py-3 text-right">
                        <Button size="sm" icon={<ClipboardCheck size={14} />} onClick={() => setEditing(s)}>Update PTM report</Button>
                      </td>
                    )}
                  </tr>
                  {isOpen && (
                    <tr className="border-b border-slate-100 bg-slate-50/40">
                      <td colSpan={isAdmin ? 6 : 5} className="px-4 py-4">
                        <PtmReportList reports={s.reports} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {isAdmin && <UpdatePtmModal student={editing} onClose={() => setEditing(null)} onSaved={onSaved} />}
    </div>
  );
}
