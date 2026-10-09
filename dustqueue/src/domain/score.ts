import type { Contribution, ScoredSite, Site } from './types';
export const REPLAY_AS_OF = '2026-10-09T03:00:00.000Z';
export const ageHours = (timestamp: string, asOf = REPLAY_AS_OF) => Math.max(0, (Date.parse(asOf) - Date.parse(timestamp)) / 3_600_000);
/** Demo triage heuristics, not regulatory thresholds or proof of a pollution source. */
export function scoreSite(site: Site, asOf = REPLAY_AS_OF): ScoredSite {
  const contributions: Contribution[] = [];
  const add = (points: number, reason: string) => contributions.push({ points, reason });
  const days = Math.floor(ageHours(site.lastAuditAt, asOf) / 24);
  const stale = !Number.isFinite(ageHours(site.sensorAt, asOf)) || ageHours(site.sensorAt, asOf) > 24;
  if (days >= 14) add(25, `Self-audit is ${days} days old`);
  else if (days >= 7) add(15, `Self-audit is ${days} days old`);
  else if (days >= 3) add(5, `Self-audit is ${days} days old`);
  if (site.cctv === 'offline') add(15, 'CCTV reported offline');
  if (site.cctv === 'unknown') add(10, 'CCTV status needs verification');
  const controls = { greenNet: 'Green net', sprinklers: 'Sprinkling', stockpile: 'Stockpile cover', tyreWash: 'Tyre wash' };
  for (const [key, label] of Object.entries(controls)) {
    const value = site.controls[key as keyof typeof site.controls];
    if (value === 'missing') add(8, `${label} evidence missing`);
    if (value === 'partial') add(4, `${label} evidence partial`);
  }
  if (stale) add(10, 'PM sample is stale; verify before using it');
  else {
    if (site.pm10 >= 150) add(10, `Replay PM10 ${site.pm10} µg/m³ (demo threshold 150)`);
    if (site.pm25 >= 60) add(5, `Replay PM2.5 ${site.pm25} µg/m³ (demo threshold 60)`);
  }
  if (site.repeatUnresolved) add(12, 'Repeat unresolved issue in the replay record');
  if (site.sensitiveReceptor) add(8, `Nearby ${site.sensitiveReceptor}; prioritise verification`);
  if (site.status === 'follow-up') add(5, 'Follow-up requested by inspector');
  if (site.status === 'escalated') add(10, 'Escalated for coordinator review');
  const score = site.status === 'fixed' ? 0 : Math.min(100, contributions.reduce((sum, c) => sum + c.points, 0));
  const band = site.status === 'fixed' ? 'closed' : score >= 80 ? 'critical' : score >= 60 ? 'high' : score >= 30 ? 'watch' : 'low';
  const reasons = site.status === 'fixed' ? ['Human marked fixed; confirmed evidence retained'] : contributions.length ? contributions.map(c => c.reason) : ['Recent replay audit; dust controls reported present'];
  return { ...site, score, band, contributions, reasons, needsVerification: stale || site.cctv === 'unknown' };
}
export function rankSites(sites: Site[], asOf = REPLAY_AS_OF): ScoredSite[] {
  return sites.map(site => scoreSite(site, asOf)).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}
