import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Masjid')
    .items(S.documentTypeListItems())
