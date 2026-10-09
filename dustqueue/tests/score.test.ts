import { describe, expect, it } from 'vitest';
import { fixtureSites } from '../src/data/fixtures';
import { rankSites, scoreSite } from '../src/domain/score';
import { applyPatch, attachEvidence, canClose, validateFile, ValidationError } from '../src/domain/workflow';

describe('DustQueue deterministic demo heuristic', () => {
  it('ranks stale audit + missing controls ahead of healthy sites', () => {
    const ranked = rankSites(fixtureSites);
    expect(ranked[0].id).toBe('DQ-104');
    expect(ranked[0].band).toBe('critical');
    expect(ranked[0].reasons).toEqual(expect.arrayContaining(['CCTV reported offline', 'Sprinkling evidence missing']));
  });
  it('keeps score explanation deterministic and labels stale samples', () => {
    const scored = scoreSite(fixtureSites.find(site => site.id === 'DQ-126')!);
    expect(scored.needsVerification).toBe(true);
    expect(scored.reasons.some(reason => reason.includes('stale'))).toBe(true);
  });
});

describe('DustQueue evidence and closure workflow', () => {
  it('rejects mismatched, oversized, or unsafe filenames', () => {
    expect(() => validateFile({ name: 'photo.exe', type: 'image/png', size: 10 })).toThrow(ValidationError);
    expect(() => validateFile({ name: '../photo.png', type: 'image/png', size: 10 })).toThrow(ValidationError);
    expect(() => validateFile({ name: 'photo.png', type: 'image/png', size: 6 * 1024 * 1024 })).toThrow(ValidationError);
    expect(() => validateFile({ name: 'photo.png', type: 'image/png', size: 10 })).not.toThrow();
  });
  it('requires assignment, note, and confirmed evidence before fixed', () => {
    const seed = fixtureSites[0];
    expect(canClose(seed)).toBe(false);
    const assigned = applyPatch(seed, { assignedTo: 'A. Khan' }, '2026-10-09T04:00:00Z', 'assign');
    const evidenced = attachEvidence(assigned, { id: 'ev-1', filename: 'visit.png', contentType: 'image/png', size: 100, verifiedAt: '2026-10-09T04:01:00Z', storage: 's3', key: 'sessions/demo/visit.png' });
    const noted = applyPatch(evidenced, { evidenceNote: 'Misting restored and cover checked.' }, '2026-10-09T04:02:00Z', 'note');
    expect(canClose(noted)).toBe(true);
    expect(applyPatch(noted, { status: 'fixed' }, '2026-10-09T04:03:00Z', 'fixed').status).toBe('fixed');
  });
  it('does not let a status transition bypass assignment', () => {
    expect(() => applyPatch(fixtureSites[0], { status: 'follow-up' }, '2026-10-09T04:00:00Z', 'bad')).toThrow('Assign an inspector');
  });
});
