export default (props: any) => {
  if (props.marks.type === 'max-min') {
    return {
      markPoint: {
        data: [{
          type: 'max',
          name: '最大值'
        }, {
          type: 'max',
          name: '最大值'
        }]
      }
    }
  }
}
