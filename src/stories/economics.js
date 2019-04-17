import { storiesOf } from '@storybook/vue'

let stories = storiesOf('业务图表|经济指标', module)

stories.add('增长趋势', () => ({
  template: `<pa-bar-chart
    :preset="'gdp'"
    :title="'增长趋势'"
    :x="Array(2020 - 2010 + 1).fill(0).map((x, i) => 2010 + i)"
    :data="[
      [300, 350, 420, 480, 560, 640, 760, 890, 1020, 1080]
    ]">
    <pa-axis :unit="'%'"></pa-axis>
    <pa-line-chart
      :axis="'right'"
      :styles="{label: 'top'}"
      :data="[
        [13.2, 12.5, 11.7, 10.7, 10.1,
        9.3, 9.1, 8.8, 7.9, 7.1]
    ]"></pa-line-chart>
  </pa-bar-chart>`
}))

stories.add('二十年间增长率', () => ({
  template: `<pa-line-chart
    class="full-width"
    :preset="'gdp-by-years'"
    :title="'深圳市经济指标'"
    :gap="false"
    :y="{unit: '%'}"
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
          color: '#009688',
          label: '十五',
          coords: ['2001', '2006']
        },
        {
          color: '#795548',
          label: '十一五',
          coords: ['2006', '2011']
        },
        {
          color: '#009688',
          label: '十二五',
          coords: ['2011', '2016']
        },
        {
          color: '#795548',
          label: '十三五',
          coords: ['2016', '2020']
        }
      ]"></pa-markareas>
    </pa-line-chart>`
}))

stories.add('GDP测算-国内环境分析', () => ({
  template: `<pa-line-chart
    :preset="'gdp,no-lines,legend-right-vertical'"
    :title="'GDP测算-国内环境分析'"
    :gap="false"
    :y="{unit: '%', min: 5}"
    :x="Array(2019 - 2013 + 1).fill(0).map((x, i) => 2013 + i)"
    :data="[
      [13.7, 13.1, 12.3, 11.1, 10.8, 9.9, 9.1],
      [11.4, 10.7, 10.0, 9.4, 8.1, 7.6, 6.5],
      [10.1, 9.6, 8.8, 8.4, 7.7, 7.0, 6.1]
    ]"
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
    <pa-legend :data="['深圳市GDP增速', '全省GDP增速', '全国GDP增速']"></pa-legend>
    <pa-tooltip
      :position="[10, 10]"
      :formatter="[
        '{b}<br>',
        '{c0} %<br>'
      ].join('')"
      :style="{}"></pa-tooltip>
    </pa-line-chart>`
}))

export default stories
