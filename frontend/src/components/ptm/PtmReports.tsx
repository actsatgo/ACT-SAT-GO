import { useEffect, useState } from 'react';
import { Loader2, ClipboardCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import { api, type PtmReport, type PtmStudent } from '../../lib/api';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

export const PREP_STATUSES = ['On track', 'Slightly Delayed', 'Needs attention'] as const;

const STATUS_STYLE: Record<string, string> = {
  'On track': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Slightly Delayed': 'bg-amber-50 text-amber-700 border-amber-200',
  'Needs attention': 'bg-red-50 text-red-700 border-red-200',
};

export function fmtDate(d: string | null | undefined): string {
  if (!d) return '—';
  const date = new Date(d.length === 10 ? `${d}T00:00:00` : d);
  return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function PrepStatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${STATUS_STYLE[status] ?? 'bg-slate-50 text-slate-600 border-slate-200'}`}>
      {status}
    </span>
  );
}

/** One PTM entry: date, prep status, target test date, mocks completed, remarks. */
export function PtmReportItem({ report, latest }: { report: PtmReport; latest?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${latest ? 'border-blue-200 bg-blue-50/40' : 'border-slate-200 bg-white'}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-slate-900">
          PTM on {fmtDate(report.ptmDate)}
          {latest && <span className="ml-2 text-xs font-medium text-blue-600">Latest</span>}
        </p>
        <PrepStatusBadge status={report.prepStatus} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs text-slate-500">Target test date</p>
          <p className="font-medium text-slate-800">{fmtDate(report.targetTestDate)}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Mocks completed</p>
          <p className="font-medium text-slate-800">{report.mocksCompleted}</p>
        </div>
      </div>
      {report.remarks && (
        <div className="mt-3">
          <p className="text-xs text-slate-500">Remarks</p>
          <p className="whitespace-pre-wrap text-sm text-slate-800">{report.remarks}</p>
        </div>
      )}
    </div>
  );
}

/** Every PTM report of one student, latest first. */
export function PtmReportList({ reports, empty = 'No PTM report yet.' }: { reports: PtmReport[]; empty?: string }) {
  if (reports.length === 0) return <p className="py-6 text-center text-sm text-slate-400">{empty}</p>;
  return (
    <div className="space-y-3">
      {reports.map((r, i) => <PtmReportItem key={r.id} report={r} latest={i === 0} />)}
    </div>
  );
}

/** Admin form to add a PTM report for a student. */
export function UpdatePtmModal({ student, onClose, onSaved }: {
  student: PtmStudent | null;
  onClose: () => void;
  onSaved: (studentId: string, reports: PtmReport[]) => void;
}) {
  const today = new Date().toISOString().slice(0, 10);
  const [ptmDate, setPtmDate] = useState(today);
  const [targetTestDate, setTargetTestDate] = useState('');
  const [prepStatus, setPrepStatus] = useState<string>('');
  const [remarks, setRemarks] = useState('');
  const [saving, setSaving] = useState(false);
  const [satDates, setSatDates] = useState<string[]>([]);

  useEffect(() => {
    api.getSatDates().then((r) => setSatDates(r.dates)).catch(() => setSatDates([]));
  }, []);

  useEffect(() => {
    if (!student) return;
    setPtmDate(today);
    // Prefill from the latest PTM, else the student's target date (kept as yyyy-mm-dd).
    const prev = (student.reports[0]?.targetTestDate ?? student.targetDate ?? '').slice(0, 10);
    setTargetTestDate(/^\d{4}-\d{2}-\d{2}$/.test(prev) ? prev : '');
    setPrepStatus('');
    setRemarks('');
  }, [student?.id]);

  const save = async () => {
    if (!student || !ptmDate || !prepStatus) return;
    setSaving(true);
    try {
      const r = await api.addPtmReport({ studentId: student.id, ptmDate, targetTestDate: satDates.includes(targetTestDate) ? targetTestDate : undefined, prepStatus, remarks });
      toast.success('PTM report saved');
      onSaved(student.id, r.reports);
      onClose();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Could not save the PTM report');
    } finally {
      setSaving(false);
    }
  };

  const input = 'w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100';
  return (
    <Modal isOpen={!!student} onClose={onClose} title={`Update PTM report · ${student?.name ?? ''}`} size="md"
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={save} disabled={!ptmDate || !prepStatus || saving}
            icon={saving ? <Loader2 size={16} className="animate-spin" /> : <ClipboardCheck size={16} />}>
            {saving ? 'Saving…' : 'Save PTM report'}
          </Button>
        </div>
      }>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Date of PTM <span className="text-red-500">*</span></label>
            <input type="date" value={ptmDate} onChange={(e) => setPtmDate(e.target.value)} className={input} />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Target test date (official SAT dates)</label>
            <select value={satDates.includes(targetTestDate) ? targetTestDate : ''}
              onChange={(e) => setTargetTestDate(e.target.value)} className={input}>
              <option value="">Select SAT date…</option>
              {satDates.map((d) => <option key={d} value={d}>{fmtDate(d)}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Prep status <span className="text-red-500">*</span></label>
            <select value={prepStatus} onChange={(e) => setPrepStatus(e.target.value)} className={input}>
              <option value="">Select…</option>
              {PREP_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Mocks completed</label>
            <div className="px-3 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
              {student?.mocksCompleted ?? 0} <span className="text-xs text-slate-400">(from the student's account)</span>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Remarks</label>
          <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} rows={4} className={input}
            placeholder="What was discussed with the parent" />
        </div>
      </div>
    </Modal>
  );
}

/** PTM reports card for a student's profile page (read-only). */
export function PtmProfileSection({ studentId }: { studentId: string }) {
  const [reports, setReports] = useState<PtmReport[] | null>(null);
  useEffect(() => {
    api.getPtmReports(studentId)
      .then((r) => setReports(r.students[0]?.reports ?? []))
      .catch(() => setReports([]));
  }, [studentId]);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="mb-3 text-sm font-semibold text-slate-800">PTM Reports</p>
      {reports === null
        ? <div className="flex items-center justify-center h-16 gap-2 text-slate-400 text-sm"><Loader2 size={16} className="animate-spin" /> Loading…</div>
        : <PtmReportList reports={reports} />}
    </div>
  );
}
