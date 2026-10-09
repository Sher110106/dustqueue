import { fixtureSites } from './fixtures';
import { applyPatch, attachEvidence } from '../domain/workflow';
import type { Evidence, Site, SitePatch } from '../domain/types';
export type UploadReceipt = Evidence;
export type SiteAdapter = {
  listSites: () => Promise<Site[]>;
  patchSite: (id: string, patch: SitePatch) => Promise<Site>;
  uploadEvidence: (id: string, file: File) => Promise<UploadReceipt>;
};
const sessionKey = 'dustqueue:demo-sites';
const sessionIdKey = 'dustqueue:session-id';
const now = () => new Date().toISOString();
const getSessionId = () => { let value = sessionStorage.getItem(sessionIdKey); if (!value) { value = crypto.randomUUID(); sessionStorage.setItem(sessionIdKey, value); } return value; };
export const localFixtureAdapter: SiteAdapter = {
  async listSites() { const saved = sessionStorage.getItem(sessionKey); return saved ? JSON.parse(saved) as Site[] : structuredClone(fixtureSites); },
  async patchSite(id, patch) { const sites = await this.listSites(); const next = sites.map(site => site.id === id ? applyPatch(site, patch, now(), crypto.randomUUID()) : site); sessionStorage.setItem(sessionKey, JSON.stringify(next)); return next.find(site => site.id === id)!; },
  async uploadEvidence(id, file) { const sites = await this.listSites(); const receipt: Evidence = { id: crypto.randomUUID(), filename: file.name, contentType: file.type, size: file.size, verifiedAt: now(), storage: 'local' }; const next = sites.map(site => site.id === id ? attachEvidence(site, receipt) : site); sessionStorage.setItem(sessionKey, JSON.stringify(next)); return receipt; }
};
const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '');
async function request(path: string, options?: RequestInit) { const response = await fetch(`${API_BASE}${path}`, { ...options, headers: { 'content-type': 'application/json', 'x-demo-session': getSessionId(), ...(options?.headers ?? {}) } }); if (!response.ok) { const body = await response.json().catch(() => ({})); throw new Error(body.message ?? `API request failed (${response.status})`); } return response.json(); }
export const apiAdapter: SiteAdapter = {
  async listSites() { return request('/sites'); },
  async patchSite(id, patch) { return request(`/sites/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify(patch) }); },
  async uploadEvidence(id, file) {
    const presign = await request(`/sites/${encodeURIComponent(id)}/evidence/presign`, { method: 'POST', body: JSON.stringify({ filename: file.name, contentType: file.type, size: file.size }) }) as { uploadUrl: string; key: string; evidenceId: string; expiresAt: string };
    const put = await fetch(presign.uploadUrl, { method: 'PUT', body: file, headers: { 'content-type': file.type, 'x-amz-server-side-encryption': 'AES256' } }); if (!put.ok) throw new Error('S3 did not confirm the evidence upload.');
    return request(`/sites/${encodeURIComponent(id)}/evidence/confirm`, { method: 'POST', body: JSON.stringify({ evidenceId: presign.evidenceId, key: presign.key, filename: file.name, contentType: file.type, size: file.size, verifiedAt: now() }) });
  }
};
export const adapter: SiteAdapter = API_BASE ? apiAdapter : localFixtureAdapter;
export const isApiMode = Boolean(API_BASE);
