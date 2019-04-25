import formats from '../../formats'

export default {
  name: 'rich-label-percent',
  props: {
    styles: {
      label: {
        formats: formats.nameValuePercent,
        percent: true
      }
    }
  }
}
