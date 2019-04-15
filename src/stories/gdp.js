import { storiesOf } from '@storybook/vue'

let stories = storiesOf('业务图表|经济指标', module)

stories.add('深圳市GDP增长率', () => ({
  template: `<pa-line-chart
    :preset="'gdp-by-years'"
    :title="'深圳市经济指标'"
    :gap="false"
    :x="Array(2020 - 2001 + 1).fill(0).map((x, i) => 2001 + i)"
    :data="[[22.1, 20.4, 19.5, 18.9, 18.2,
      17.2, 16.5, 15.8, 14.5, 13.6, 13.2,
      12.5, 11.7, 10.7, 10.1, 9.3, 9.1, 8.8,
      7.9, 7.1]]"
    :styles="{
      x: {
        gap: false,
        fontSize: 10
      },
      label: {
        position: 'top',
        fontSize: 9
      }
    }"
    >
      <pa-tooltip
        :position="[10, 10]"
        :formatter="[
          '{b}<br>',
          '{c0} %<br>'
        ].join('')"
        :style="{}"></pa-tooltip>
      <pa-markareas 
        :mode="'columns'"
        :data="[
          {
            color: '#666',
            label: '十五',
            coords: ['2001', '2005']
          },
          {
            color: '#999',
            label: '十一五',
            coords: ['2005', '2009']
          },
          {
            color: '#666',
            label: '十二五',
            coords: ['2009', '2014']
          },
          {
            color: '#999',
            label: '十三五',
            coords: ['2014', '2019']
          }
        ]"></pa-markareas>
    </pa-line-chart>`
}))

export default stories
