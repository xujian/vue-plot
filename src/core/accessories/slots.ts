/**
 * 将 <chart>内slot包含的内容转化为标准选项
 */
export function processSlots (slots: any[]) {
  let result: any[] = []
  if (slots) {
    console.log('slots.ts--------/////////slots/////', slots)
    slots.forEach (s => {
    let props = s.componentOptions.propsData
      result.push({
        name: s.componentOptions.tag || s.tag,
        props
      })
    })
  }
  return result
}
