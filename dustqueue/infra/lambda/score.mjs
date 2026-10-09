export function scoreSite(site) {
  const reasons = [];
  const auditAge = (Date.parse('2026-10-09T03:00:00Z') - Date.parse(site.lastAuditAt)) / 86400000;
  if (auditAge >= 14) reasons.push(`Self-audit is ${Math.floor(auditAge)} days old`);
  else if (auditAge >= 7) reasons.push(`Self-audit is ${Math.floor(auditAge)} days old`);
  else if (auditAge >= 3) reasons.push(`Self-audit is ${Math.floor(auditAge)} days old`);
  if (site.cctv === 'offline') reasons.push('CCTV reported offline');
  if (site.cctv === 'unknown') reasons.push('CCTV status needs verification');
  for (const [key, label] of Object.entries({ greenNet: 'Green net', sprinklers: 'Sprinkling', stockpile: 'Stockpile cover', tyreWash: 'Tyre wash' })) if (site.controls[key] === 'missing') reasons.push(`${label} evidence missing`); else if (site.controls[key] === 'partial') reasons.push(`${label} evidence partial`);
  if ((Date.parse('2026-10-09T03:00:00Z') - Date.parse(site.sensorAt)) > 86400000) reasons.push('PM sample is stale; verify before using it'); else { if (site.pm10 >= 150) reasons.push(`Replay PM10 ${site.pm10} µg/m³ (demo threshold 150)`); if (site.pm25 >= 60) reasons.push(`Replay PM2.5 ${site.pm25} µg/m³ (demo threshold 60)`); }
  if (site.repeatUnresolved) reasons.push('Repeat unresolved issue in the replay record');
  if (site.sensitiveReceptor) reasons.push(`Nearby ${site.sensitiveReceptor}; prioritise verification`);
  if (site.status === 'follow-up') reasons.push('Follow-up requested by inspector');
  if (site.status === 'escalated') reasons.push('Escalated for coordinator review');
  const weights = reasons.reduce((sum, reason) => sum + (reason.includes('days old') ? (auditAge >= 14 ? 25 : auditAge >= 7 ? 15 : 5) : reason.includes('CCTV') ? 15 : reason.includes('missing') ? 8 : reason.includes('partial') ? 4 : reason.includes('stale') ? 10 : reason.includes('PM10') ? 10 : reason.includes('PM2.5') ? 5 : reason.includes('Repeat') ? 12 : reason.includes('Nearby') ? 8 : reason.includes('Follow-up') ? 5 : 10), 0);
  const score = site.status === 'fixed' ? 0 : Math.min(100, weights);
  return { ...site, score, band: site.status === 'fixed' ? 'closed' : score >= 80 ? 'critical' : score >= 60 ? 'high' : score >= 30 ? 'watch' : 'low', reasons: reasons.length ? reasons : ['Recent replay audit; dust controls reported present'], needsVerification: (Date.parse('2026-10-09T03:00:00Z') - Date.parse(site.sensorAt)) > 86400000 };
}
