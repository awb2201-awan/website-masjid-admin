# Masjid Lathifah Admin

Standalone Sanity Studio for editing the content used by the public website.

## Local setup

1. Copy `.env.example` to `.env` and fill in the Sanity project ID and dataset.
2. Install dependencies with `npm install`.
3. Start Studio with `npm run dev`.
4. Open the URL printed by Sanity and sign in with an invited Sanity account.

To migrate the initial data from the sibling `website-masjid` project, run:

```powershell
npx sanity login
npm run migrate:data
```

The public website does not receive a write token. Access control is managed by Sanity project membership and roles.
