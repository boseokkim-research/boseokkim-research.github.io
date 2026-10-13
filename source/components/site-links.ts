import {SITE_VERSION} from '../content/site-version';

// Keep navigation on one release even when a previously visited page is cached.
export function siteHref(href: string): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const url = new URL(href, 'https://boseokkim-research.github.io');
  url.searchParams.set('v', SITE_VERSION);
  return url.pathname + url.search + url.hash;
}
