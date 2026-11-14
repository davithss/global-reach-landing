export const TARGET = 'https://thiesse.com.br/';
export const PATHS = ['/', '/mission-control', '/vacinapp', '/links', '/mission-control/politica-de-privacidade', '/mission-control/termos-de-servico'];
export function matches(site: string) {
  if (site.startsWith('sc-domain:')) {
    const domain = site.slice(10).toLowerCase();
    return new URL(TARGET).hostname === domain || new URL(TARGET).hostname.endsWith(`.${domain}`);
  }
  try { return TARGET.startsWith(new URL(site).href); } catch { return false; }
}
export function resolve(entries: {siteUrl: string; permissionLevel?: string}[], selected?: string | null) {
  const candidates = entries.filter(e => e.permissionLevel !== 'siteUnverifiedUser' && matches(e.siteUrl)).map(e => e.siteUrl);
  if (selected && candidates.includes(selected)) return {status: 'selected', siteUrl: selected};
  if (selected) return {status:'unavailable',candidates};
  if (candidates.length === 1) return {status: 'selected', siteUrl: candidates[0]};
  return {status: candidates.length ? 'selection_required' : 'unavailable', candidates};
}
export function indexingState(result: Record<string, string> = {}) {
  if (result.verdict === 'PASS') return 'indexed';
  if (result.pageFetchState && !['SUCCESSFUL', 'PAGE_FETCH_STATE_UNSPECIFIED'].includes(result.pageFetchState)) return 'crawl_error';
  if (result.verdict === 'FAIL' || result.verdict === 'NEUTRAL') return 'not_indexed';
  return 'unknown';
}