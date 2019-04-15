import { storiesOf } from '@storybook/vue'

let stories = storiesOf('业务图表|经济指标', module)

stories.add('分区经济增长', () => ({
  template: `<pa-bar-chart
    :preset="'gdp-by-years'"
    :styles="{
      canvas: {
        margin: ['5%', '8%', '20%', '8%']
      },
      label:{
        rotate: 45,
        fontSize: 10
      }
    }"
    :title="'深圳市经济指标'"
    :dataset="'mocks:gdp-by-years-dataset'">
      <pa-tooltip
        :position="[10, 10]"
        :formatter="[
          '{b}<br>',
          '{a0}: {c0} (亿元)<br>',
          '{a1}: {c1} (亿元)<br>',
          '{a2}: {c2} %',
        ].join('')"
        :style="{}"></pa-tooltip>
      <pa-axis
        position="right"
        :label="'Y'"></pa-axis>
      <pa-line-chart
        :axis="'right'"
        :legends="['同比增长']"
        :data="[[6.88, 9.38, 8.46, 16.1, 12.4, 13.5, 14.9, 11.5, 14.5, 6.50]]"></pa-line-chart>
      <pa-markarea :mode="'columns'" :data="[['福田区', '南山区']]"></pa-markarea>
    </pa-bar-chart>`
}))

export default stories
