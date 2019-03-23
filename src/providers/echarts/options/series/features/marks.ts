export default function (props: any) {
  let markPoint 
  if (props.marks) {
    if (props.marks.type === 'max-min') {
      markPoint = {
        data: [{
          type: 'max',
          name: '最大值'
        }, {
          type: 'min',
          name: '最小值'
        }]
      }
    }
  }
  return {
    markPoint
  }
}