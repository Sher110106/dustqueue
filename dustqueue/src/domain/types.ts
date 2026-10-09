export type SiteStatus = 'open' | 'in-progress' | 'fixed' | 'follow-up' | 'escalated';
export type RiskBand = 'critical' | 'high' | 'watch' | 'low' | 'closed';
export type Control = 'missing' | 'partial' | 'verified';
export type Evidence = {
  id: string; filename: string; contentType: string; size: number; verifiedAt: string;
  storage: 'local' | 's3'; key?: string; versionId?: string;
};
export type TrailEntry = { id: string; at: string; action: string; actor: string; note?: string };
export type Site = {
  id: string; name: string; ward: string; address: string; operator: string;
  plotSizeSqm: number; lastAuditAt: string; lastVisitAt: string;
  pm25: number; pm10: number; sensorAt: string;
  cctv: 'online' | 'offline' | 'unknown';
  controls: { greenNet: Control; sprinklers: Control; stockpile: Control; tyreWash: Control };
  sensitiveReceptor: string | null; repeatUnresolved: boolean;
  status: SiteStatus; assignedTo: string | null; evidenceNote: string;
  evidence: Evidence[]; trail: TrailEntry[]; version: number; openedAt: string;
};
export type Contribution = { points: number; reason: string };
export type ScoredSite = Site & { score: number; band: RiskBand; contributions: Contribution[]; reasons: string[]; needsVerification: boolean };
export type SitePatch = { assignedTo?: string; status?: SiteStatus; evidenceNote?: string };
export type StatusFilter = 'all' | 'active' | SiteStatus;
export const statusLabels: Record<SiteStatus, string> = { open: 'Unassigned', 'in-progress': 'Assigned', fixed: 'Fixed', 'follow-up': 'Follow-up', escalated: 'Escalated' };
export const inspectors = ['A. Khan', 'R. Singh', 'M. Das', 'S. Iyer'];
