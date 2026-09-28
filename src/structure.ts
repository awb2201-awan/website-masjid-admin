import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Masjid')
    .items([
      S.listItem()
        .title('Pengaturan Website')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteSettings'),
    ])
