import {defineField, defineType} from 'sanity'
import ColorInput from '../components/color-input'

const colorField = (name: string, title: string, initialValue: string) =>
  defineField({
    name,
    title,
    type: 'string',
    initialValue,
    description: 'Klik kotak warna untuk memilih warna.',
    components: {input: ColorInput},
    validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/, {name: 'hex color', invert: false}),
  })

export default defineType({
  name: 'siteSettings',
  title: 'Pengaturan Website',
  type: 'document',
  initialValue: {
    warna: {
      utama: '#0d3d2b',
      utamaHover: '#0a2e21',
      aksen: '#c9a84c',
      aksenHover: '#b8963e',
      aksenTerang: '#f0d57a',
      kategori: {
        berita: '#2f9e6f',
        kegiatan: '#c9a84c',
        pengumuman: '#2563eb',
        sosial: '#f43f5e',
      },
    },
    heroDeskripsi: 'Ruang digital untuk mengenal masjid, melihat jadwal ibadah, serta mengikuti informasi dan kegiatan Masjid Lathifah.',
    tentang: {
      label: 'Tentang Kami',
      judul: 'Masjid Lathifah',
      paragrafPertama: 'Masjid Lathifah adalah masjid yang berlokasi di lingkungan perumahan, menjadi pusat kegiatan ibadah dan sosial masyarakat setempat. Dikelola oleh Dewan Kemakmuran Masjid (DKM) Lathifah, masjid ini terbuka untuk seluruh jamaah.',
      paragrafKedua: 'Dengan fasilitas yang terus dikembangkan, Masjid Lathifah hadir untuk melayani kebutuhan ibadah dan kegiatan keagamaan warga sekitar setiap harinya.',
    },
  },
  groups: [
    {name: 'warna', title: 'Warna'},
    {name: 'tentang', title: 'Tentang Kami'},
    {name: 'donasi', title: 'Donasi'},
  ],
  fields: [
    defineField({
      name: 'warna',
      title: 'Warna Website',
      type: 'object',
      group: 'warna',
      fields: [
        colorField('utama', 'Hijau utama', '#0d3d2b'),
        colorField('utamaHover', 'Hijau utama saat hover', '#0a2e21'),
        colorField('aksen', 'Emas aksen', '#c9a84c'),
        colorField('aksenHover', 'Emas aksen saat hover', '#b8963e'),
        colorField('aksenTerang', 'Emas terang', '#f0d57a'),
        defineField({
          name: 'kategori',
          title: 'Warna kategori berita',
          type: 'object',
          fields: [
            colorField('berita', 'Berita', '#2f9e6f'),
            colorField('kegiatan', 'Kegiatan', '#c9a84c'),
            colorField('pengumuman', 'Pengumuman', '#2563eb'),
            colorField('sosial', 'Sosial', '#f43f5e'),
          ],
        }),
      ],
    }),
    defineField({
      name: 'heroDeskripsi',
      title: 'Teks pembuka hero',
      type: 'text',
      rows: 3,
      group: 'tentang',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tentang',
      title: 'Konten Tentang Kami',
      type: 'object',
      group: 'tentang',
      fields: [
        defineField({name: 'label', title: 'Label bagian', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'judul', title: 'Judul', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'paragrafPertama', title: 'Paragraf pertama', type: 'text', rows: 4, validation: (rule) => rule.required()}),
        defineField({name: 'paragrafKedua', title: 'Paragraf kedua', type: 'text', rows: 4, validation: (rule) => rule.required()}),
        defineField({
          name: 'gambar',
          title: 'Foto masjid',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', title: 'Teks alternatif', type: 'string'})],
        }),
      ],
    }),
    defineField({
      name: 'qris',
      title: 'Gambar QRIS',
      type: 'image',
      group: 'donasi',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Teks alternatif', type: 'string'})],
    }),
  ],
  preview: {prepare: () => ({title: 'Pengaturan Website'})},
})
