import { inspectors } from './types';
import type { Evidence, Site, SitePatch, SiteStatus } from './types';
export const MAX_FILE_BYTES = 5 * 1024 * 1024;
export const fileTypes = { 'image/jpeg': ['jpg', 'jpeg'], 'image/png': ['png'], 'application/pdf': ['pdf'] };
export class ValidationError extends Error {}
export function validateFile(file: { name: string; type: string; size: number }) {
  if (!/^[A-Za-z0-9][A-Za-z0-9 _.-]{0,99}$/.test(file.name) || file.name.includes('..')) throw new ValidationError('Use a simple filename of up to 100 characters; no paths or double dots.');
  const extensions = fileTypes[file.type as keyof typeof fileTypes];
  if (!extensions || !extensions.includes(file.name.split('.').at(-1)!.toLowerCase())) throw new ValidationError('Upload a JPEG, PNG or PDF with a matching file extension.');
  if (!Number.isInteger(file.size) || file.size < 1 || file.size > MAX_FILE_BYTES) throw new ValidationError('Evidence must be between 1 byte and 5 MB.');
}
export function matchesSignature(bytes: Uint8Array, type: string) {
  if (type === 'image/png') return [137, 80, 78, 71, 13, 10, 26, 10].every((n, i) => bytes[i] === n);
  if (type === 'image/jpeg') return bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  if (type === 'application/pdf') return [37, 80, 68, 70, 45].every((n, i) => bytes[i] === n);
  return false;
}
export function canClose(site: Site) { return Boolean(site.assignedTo && site.evidenceNote.trim().length >= 10 && site.evidence.some(e => e.verifiedAt >= site.openedAt)); }
const transitions: Record<SiteStatus, SiteStatus[]> = { open: ['in-progress'], 'in-progress': ['fixed', 'follow-up', 'escalated'], 'follow-up': ['in-progress', 'fixed', 'escalated'], escalated: ['in-progress', 'follow-up', 'fixed'], fixed: ['follow-up', 'escalated'] };
export function applyPatch(site: Site, patch: SitePatch, now: string, id: string): Site {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch) || !Object.keys(patch).length || Object.keys(patch).some(k => !['assignedTo', 'status', 'evidenceNote'].includes(k))) throw new ValidationError('Only assignment, status and evidence note may be changed.');
  if (patch.assignedTo !== undefined && !inspectors.includes(patch.assignedTo)) throw new ValidationError('Choose a listed inspector.');
  if (patch.evidenceNote !== undefined && (typeof patch.evidenceNote !== 'string' || patch.evidenceNote.length > 600 || /[\u0000-\u0008]/.test(patch.evidenceNote))) throw new ValidationError('Evidence note must be text, up to 600 characters.');
  const result = { ...site, ...patch, evidenceNote: patch.evidenceNote?.trim() ?? site.evidenceNote, version: site.version + 1 };
  if (patch.assignedTo && result.status === 'open') result.status = 'in-progress';
  if (result.status !== site.status) {
    if (!result.assignedTo) throw new ValidationError('Assign an inspector before recording a result.');
    if (!transitions[site.status].includes(result.status)) throw new ValidationError('Assign the visit before recording a result.');
    if (result.status === 'fixed' && !canClose(result)) throw new ValidationError('Closure requires an inspector, a factual note (at least 10 characters), and confirmed evidence.');
    if (site.status === 'fixed') result.openedAt = now;
  }
  const action = result.status !== site.status ? `Status: ${result.status}` : patch.assignedTo ? 'Inspector assigned' : 'Evidence note saved';
  result.trail = [...site.trail, { id, at: now, action, actor: result.assignedTo ?? 'Coordinator', ...(patch.evidenceNote ? { note: result.evidenceNote } : {}) }];
  return result;
}
export function attachEvidence(site: Site, evidence: Evidence): Site {
  if (site.status === 'fixed') throw new ValidationError('Reopen the case before adding new evidence.');
  if (site.evidence.length >= 8) throw new ValidationError('Demo limit: eight evidence files per site.');
  return { ...site, version: site.version + 1, evidence: [...site.evidence, evidence], trail: [...site.trail, { id: evidence.id, at: evidence.verifiedAt, action: 'Evidence upload confirmed', actor: site.assignedTo ?? 'Coordinator', note: evidence.filename }] };
}
