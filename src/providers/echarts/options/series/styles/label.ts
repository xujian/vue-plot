/**
 * 将styles.label翻译为series内的字段
 * @param rules
 * @param props
 */
export default function (rules: any) {
  let label: {[key: string]: any} = {}
  /***
   * styles.label = '{c}%'
   * styles.label = 'top'
   */
  if (rules.label === false) {
    label = {
      show: false
    }
  } else if (typeof rules.label === 'string') {
    if (['top'].includes(rules.label)) {
      label = {
        show: true,
        position: rules.label
      }
    }
  } else {
    if (rules.label.formats) {
      let formats = rules.label.formats
      label = {
        normal: {
          formatter: function (params: any) {
            return [
              '{name|' + params.name + '}\n',
              formats.hr ? '{hr|}\n' : '',
              '{value|' + params.value + '}',
              rules.label.percent && params.percent
                ? '\n{percent|' + params.percent + '%}'
                : ''
            ].join('')
          },
          rich: formats
        }
      }
    } else {
      label = {
        show: true,
        position: rules.label.position,
        offset: rules.label.offset || [0, 0],
        fontSize: rules.label.fontSize
      }
    }
  }
  return {
    label
  }
}
