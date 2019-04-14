export default function (props: any) {
  console.log('markarea.ts__________________///_____')
  let markArea = {
    silent: true,
    itemStyle: {
      normal: {
        color: 'transparent',
        borderWidth: 1,
        borderType: 'dashed'
      }
    },
    data: [[{
      name: '',
      xAxis: 'min',
      yAxis: 'min'
    }, {
      xAxis: 'max',
      yAxis: 'max'
    }]]
  }
  return {
    markArea
  }
}