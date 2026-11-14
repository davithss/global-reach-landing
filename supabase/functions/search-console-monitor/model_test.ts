import { assertEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { PATHS, resolve, indexingState } from './model.ts';
Deno.test('six monitored pages', () => assertEquals(PATHS, ['/', '/mission-control', '/vacinapp', '/links', '/mission-control/politica-de-privacidade', '/mission-control/termos-de-servico']));
Deno.test('multiple verified properties require choice', () => assertEquals(resolve([{siteUrl:'https://thiesse.com.br/'},{siteUrl:'sc-domain:thiesse.com.br'}]).status, 'selection_required'));
Deno.test('unverified properties never selected', () => assertEquals(resolve([{siteUrl:'https://thiesse.com.br/',permissionLevel:'siteUnverifiedUser'}]).status, 'unavailable'));
Deno.test('unknown is not not-indexed', () => assertEquals(indexingState({}), 'unknown'));
Deno.test('fetch error is highlighted', () => assertEquals(indexingState({pageFetchState:'SERVER_ERROR',verdict:'FAIL'}), 'crawl_error'));