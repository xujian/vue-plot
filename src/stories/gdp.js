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
      <pa-markarea 
        :mode="'columns'"
        :data="[['2001', '2010'], ['2010', '2019']]"></pa-markarea>
    </pa-line-chart>`
}))

export default stories
