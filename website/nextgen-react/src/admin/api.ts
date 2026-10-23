import { QUERY_API_BASE } from '../config';

const TOKEN_KEY = 'spg_admin_token';

export type LeadStatus = 'Pending' | 'In Progress' | 'Contacted' | 'Resolved';

// Tutor recruitment pipeline (Status 1) and post-hire lifecycle (Status 2) —
// tracked separately from the generic LeadStatus above, which stays as-is for
// Student leads. A tutor applicant can be e.g. "Selected" (Status 1) and later
// "Onboarded" (Status 2) — these are independent axes, not one linear status.
export type TutorRecruitmentStatus = 'Rejected' | 'Shortlisted' | 'Interviewed' | 'Selected';
export type TutorOnboardingStatus = 'Onboarded' | 'Inactive' | 'EOC';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  exam: string;
  message: string;
  type: string; // 'Consultation' | 'Newsletter' | 'Tutor'
  status: LeadStatus;
  createdAt: string;

  // Tutor fields
  city?: string;
  subject?: string;
  testPrep?: string[];
  grades?: string;
  hourlyRate?: string;
  cvFile?: {
    name: string;
    type: string;
    data: string; // base64 string
  } | null;
  videoUrl?: string;
  remarks?: string;
  companiesWorkedWith?: string;
  recruitmentStatus?: TutorRecruitmentStatus;
  onboardingStatus?: TutorOnboardingStatus;
}

export interface Job {
  id: string;
  dept: string;
  title: string;
  location: string;
  type: string;
  desc: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  text: string;
  image: string;
  date: string;
  read: string;
  tags: string[];
  createdAt: string;
}

export const LEAD_STATUSES: LeadStatus[] = ['Pending', 'In Progress', 'Contacted', 'Resolved'];
export const TUTOR_RECRUITMENT_STATUSES: TutorRecruitmentStatus[] = ['Rejected', 'Shortlisted', 'Interviewed', 'Selected'];
export const TUTOR_ONBOARDING_STATUSES: TutorOnboardingStatus[] = ['Onboarded', 'Inactive', 'EOC'];

// ─── Token storage ────────────────────────────────────────────────────────────
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}
export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}
export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
export function isAuthed(): boolean {
  return !!getToken();
}

// Thrown when a request fails because the session is missing/expired.
export class AuthError extends Error {
  constructor(message = 'Your session has expired. Please log in again.') {
    super(message);
    this.name = 'AuthError';
  }
}

// ─── API calls ────────────────────────────────────────────────────────────────
export async function adminLogin(username: string, password: string): Promise<void> {
  let res: Response;
  try {
    res = await fetch(`${QUERY_API_BASE}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  } catch {
    throw new Error(`Cannot reach the server. Make sure the query server is running at ${QUERY_API_BASE}.`);
  }
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Login failed');
  }
  const data = await res.json();
  setToken(data.token);
}

async function authFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const token = getToken();
  if (!token) throw new AuthError();
  let res: Response;
  try {
    res = await fetch(`${QUERY_API_BASE}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    throw new Error(`Cannot reach the server at ${QUERY_API_BASE}.`);
  }
  if (res.status === 401) {
    clearToken();
    throw new AuthError();
  }
  return res;
}

export async function fetchLeads(): Promise<Lead[]> {
  const res = await authFetch('/api/queries');
  if (!res.ok) throw new Error('Failed to load leads');
  return res.json();
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<Lead> {
  const res = await authFetch(`/api/queries/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update status');
  const data = await res.json();
  return data.query;
}

// Generic partial update — used for tutor-only fields (recruitmentStatus,
// onboardingStatus, companiesWorkedWith) that don't warrant their own endpoint.
export async function updateLeadFields(id: string, fields: Partial<Lead>): Promise<Lead> {
  const res = await authFetch(`/api/queries/${id}`, {
    method: 'PUT',
    body: JSON.stringify(fields),
  });
  if (!res.ok) throw new Error('Failed to update lead');
  const data = await res.json();
  return data.query;
}

export async function deleteLead(id: string): Promise<void> {
  const res = await authFetch(`/api/queries/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete lead');
}

export async function createLead(data: {
  name: string;
  email: string;
  phone?: string;
  exam?: string;
  message?: string;
  type?: string;
  status?: LeadStatus;
  city?: string;
  subject?: string;
  testPrep?: string[];
  grades?: string;
  hourlyRate?: string;
  cvFile?: {
    name: string;
    type: string;
    data: string;
  } | null;
  videoUrl?: string;
  remarks?: string;
  companiesWorkedWith?: string;
  recruitmentStatus?: TutorRecruitmentStatus;
  onboardingStatus?: TutorOnboardingStatus;
}): Promise<Lead> {
  const res = await authFetch('/api/queries', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any).error || 'Failed to create lead');
  }
  const json = await res.json();
  return json.query;
}

// ─── Jobs CRUD ───────────────────────────────────────────────────────────────
export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch(`${QUERY_API_BASE}/api/jobs`);
  if (!res.ok) throw new Error('Failed to load jobs');
  return res.json();
}

export async function createJob(data: {
  dept: string;
  title: string;
  location?: string;
  type?: string;
  desc: string;
}): Promise<Job> {
  const res = await authFetch('/api/jobs', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create job');
  return res.json();
}

export async function deleteJob(id: string): Promise<void> {
  const res = await authFetch(`/api/jobs/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete job');
}

// ─── Blogs CRUD ──────────────────────────────────────────────────────────────
export async function fetchBlogs(): Promise<BlogPost[]> {
  const res = await fetch(`${QUERY_API_BASE}/api/blogs`);
  if (!res.ok) throw new Error('Failed to load blogs');
  return res.json();
}

export async function createBlog(data: {
  tag: string;
  title: string;
  text: string;
  image?: string;
  date?: string;
  read?: string;
  tags?: string[];
}): Promise<BlogPost> {
  const res = await authFetch('/api/blogs', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create blog');
  return res.json();
}

export async function deleteBlog(id: string): Promise<void> {
  const res = await authFetch(`/api/blogs/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete blog');
}

// ─── Google reviews ──────────────────────────────────────────────────────────
export interface AdminReview {
  id: string;
  source: 'google' | 'manual';
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  publishTime?: string;
  featured: boolean;
  order: number | null;
  hidden: boolean;
  createdAt: string;
}

export interface ReviewSettings {
  lastSync?: string;
  lastAttempt?: string;
  lastError?: string;
  rating?: number | null;
  total?: number | null;
  mapsUrl?: string;
}

async function errorFrom(res: Response, fallback: string): Promise<Error> {
  const data = await res.json().catch(() => ({}));
  return new Error(data.error || fallback);
}

export async function fetchAdminReviews(): Promise<{ configured: boolean; settings: ReviewSettings; reviews: AdminReview[] }> {
  const res = await authFetch('/api/admin/google-reviews');
  if (!res.ok) throw await errorFrom(res, 'Failed to load reviews');
  return res.json();
}

export async function syncGoogleReviews(): Promise<{ added: number; fetched: number }> {
  const res = await authFetch('/api/admin/google-reviews/sync', { method: 'POST' });
  if (!res.ok) throw await errorFrom(res, 'Sync failed');
  return res.json();
}

export async function saveFeaturedReviews(ids: string[]): Promise<void> {
  const res = await authFetch('/api/admin/google-reviews/featured', { method: 'PUT', body: JSON.stringify({ featured: ids }) });
  if (!res.ok) throw await errorFrom(res, 'Failed to save order');
}

export async function setReviewHidden(id: string, hidden: boolean): Promise<void> {
  const res = await authFetch(`/api/admin/google-reviews/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify({ hidden }) });
  if (!res.ok) throw await errorFrom(res, 'Failed to update review');
}

export async function addManualReview(data: { author: string; text: string; rating: number; relativeTime?: string }): Promise<AdminReview> {
  const res = await authFetch('/api/admin/google-reviews', { method: 'POST', body: JSON.stringify(data) });
  if (!res.ok) throw await errorFrom(res, 'Failed to add review');
  return res.json();
}

export async function deleteManualReview(id: string): Promise<void> {
  const res = await authFetch(`/api/admin/google-reviews/${encodeURIComponent(id)}`, { method: 'DELETE' });
  if (!res.ok) throw await errorFrom(res, 'Failed to delete review');
}
