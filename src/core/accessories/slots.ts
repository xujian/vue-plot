/**
 * 将 <chart>内slot包含的内容转化为标准选项
 */
export function processSlots (slots: any[]) {
  let result = []
  slots.forEach (s => {
    console.log('precessSlots=======', s)
    if (s.tag === 'pa-axis') {
      result.push({
        name: 'axis',
        data: {}
      })
    }
  })
}