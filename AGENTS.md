# Architecture rules
- Keep the main-page sales copy in the bilingual language context so both languages stay complete.
- Use the existing asset pointer for the full-bleed hero portrait and semantic CSS overlays to keep text legible without a decorative image card.
- Keep Mission Control as an independent product page with direct WhatsApp contact instead of an application form; retain existing application records as service-role-only data so visitor contact details cannot be read publicly.
- Share route SEO definitions between Helmet and the static HTML metadata script so all public pages keep self-referencing metadata; preserve the static sitemap mechanism.
- Load Google Analytics only after explicit analytics consent on production hosts, disable advertising features, and report SPA visits once without query strings.
- Capture Google Analytics link clicks in the existing consent-aware tracker so WhatsApp, community and product links across all pages share fixed non-personal event identifiers without changing navigation.
- Keep Search Console monitoring private behind server-validated admin roles; resolve verified properties at runtime, cache daily sitemap reads, and inspect individual URLs only on explicit requests to conserve Google's quota.
- Store editable profile fields separately from protected roles; grant initial admin access only to a server-held invitation after confirmed email authentication.
