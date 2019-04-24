import formats from '../../formats'

export default {
  name: 'rich-label-big-number',
  props: {
    styles: {
      label: {
        formats: formats.bignumber,
      }
    }
  }
}
