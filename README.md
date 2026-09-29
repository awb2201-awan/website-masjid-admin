# Masjid Lathifah Admin

Standalone Sanity Studio for editing the content used by the public website.

Studio can be used on phones: its built-in responsive navigation and editing screens are retained, with larger touch targets and mobile-friendly form controls on narrow screens. The Sanity-hosted sign-in screen is managed by Sanity and is not styled by this project.

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

## Pengaturan website

Buka **Pengaturan Website** di navigasi Studio untuk mengubah warna identitas/aksen dan warna kategori berita, teks pembuka hero, konten serta foto Tentang Kami, dan gambar QRIS. Nilai warna menggunakan format HEX enam digit, misalnya `#0d3d2b`. Setelah perubahan dipublikasikan, website publik akan mengambil pengaturan terbaru; warna netral/status dan placeholder QRIS tidak dikustomisasi.

## Deploy on Vercel

This project includes [`vercel.json`](./vercel.json) for a static Sanity Studio deployment.

When importing it into Vercel:

1. Keep the project **Root Directory** as `.` because this repository is already the Studio project root.
2. Set `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` in Vercel for the required environments.
3. Keep the build command as `npm run build` and the output directory as `dist`.
4. Deploy. The rewrite in `vercel.json` keeps client-side Studio routes working after refresh.

For a Sanity-hosted Studio instead, use `npm run deploy`; that is separate from the Vercel deployment.
