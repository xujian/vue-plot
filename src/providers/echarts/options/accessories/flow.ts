export default function (props: any, providerOptions: any) {
  return {
    series: [{
      type: 'lines',
      data: [
        [
          { coord: [0, 0] },
          { coord: [1000, 140] },
        ],
        [
          { coord: [0, 100] },
          { coord: [1000, 140] }
        ]
      ]
    }]
  }
}
