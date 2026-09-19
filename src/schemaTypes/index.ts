import {type SchemaTypeDefinition} from 'sanity'
import berita from './berita'
import galeri from './galeri'
import mimbarJumat from './mimbarJumat'
import mitra from './mitra'
import pengurus from './pengurus'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [berita, galeri, pengurus, mimbarJumat, mitra],
}
