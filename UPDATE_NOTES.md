# Website update — 13 October 2026

Both language versions have been updated.

- Undergraduate supervision is dated 2025–2026 in Teaching and the merged profile/CV. Its description uses the past tense.
- The profile introduction is one paragraph, using the owner’s revised Korean wording and an equivalent natural English sentence. The separate paragraph about educational practice has been removed.
- Service is an h2 section heading, matching Education and Awards & funding. It remains at the end and is not added to the section navigation.
- Previous tagline, research paragraph and eight-session wording removals remain in place. All education, research/project, teaching, presentation, award/funding, service, publication and research communication records and supervised modules are retained.
- Internal navigation, language switching, profile redirects and homepage links include a release version query. The version is derived from source and asset content automatically before building. Canonical and sitemap URLs remain unchanged. This reduces reuse of older visited pages once a fresh release entry is opened; an unversioned bookmarked entry may still need a hard refresh.

Live review: the public Korean homepage, research, teaching, profile and legacy profile pages, and the checked English pages, matched the previously delivered ZIP at review time. The Korean source did not contain the removed tagline. A fresh browser visit also showed the updated four-item menu and merged CV. The supplied screenshot showed the older five-item menu. GitHub’s response advertised a ten-minute cache lifetime, so caching is a likely explanation for the discrepancy rather than an unmodified Korean file.

Validation includes the static production build with TypeScript checking, all bilingual content and legacy routes, page/asset/anchor paths, direct HTTP requests, complete record preservation, the revised introduction and dates, matching service-heading markup, and consistent release versions across internal links.

The package contains root deployment files and editable source. Private context, signatures, draft infographics and PDF downloads are excluded. The new corrections have not been uploaded to GitHub by the assistant.

Extract the ZIP and replace the enclosed files and folders in the repository root. Wait for GitHub Pages deployment to finish, then open a versioned entry or hard refresh once. Preserve a local .git folder. Uploading new files does not remove obsolete PDFs already in the repository.
