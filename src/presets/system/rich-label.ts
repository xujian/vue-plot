import formats from '../../formats'

export default {
  name: 'rich-label',
  props: {
    styles: {
      label: {
        formats: formats.bignumber,
      }
    }
  }
}
