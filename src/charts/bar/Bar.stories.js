import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|Bar', module)
// stories.addDecorator(withTheme)

let states = [
  {
    name: 'Simple',
    template: `<pa-bar-chart
    :title="'简单柱形图'"
    :background="'#000'"
    :round="round"
    :bar-width="barWidth"
    :bar-gap="barGap"
    :data="[
      [100, 150, 500, 250, 400],
      [47, 100, 100, 430, 210]
    ]"
    ></pa-bar-chart>`
  },
  {
    name: 'With line',
    template: `<pa-bar-chart
      :round="round"
      :bar-width="barWidth"
      :bar-gap="barGap"
      :data="[
        [100, 150, 500, 250, 400],
        [47, 100, 100, 430, 210]
      ]">
        <pa-axis
          position="right"
          :unit="'%'"
          :label="'Y'"></pa-axis>
        <pa-line-chart
          :axis="'right'"
          :line-width="2"
          :data="[
            [0.87, 0.60, 0.76, 0.49, 0.89],
            [0.56, 0.23, 0.45, 0.78, 0.38]
          ]"
        ></pa-line-chart>
      </pa-bar-chart>`
  },
  {
    name: 'With colors',
    template: `<pa-bar-chart
    :styles="{
      colors: ['#003366', '#006699', '#4cabce', '#e5323e'],
    }"
    :round="round"
    :bar-width="barWidth"
    :bar-gap="barGap"
    :shadow="true"
    :data="[
      [320, 332, 301, 334, 390],
      [220, 182, 191, 234, 290],
      [150, 232, 201, 154, 190],
      [98, 77, 101, 99, 40]
    ]"
    ></pa-bar-chart>`
  },
  {
    name: 'With gradients',
    template: `<pa-bar-chart
    :styles="{
      colors: [
        'gradient:#008cff,#005193',
        'gradient:#00da9c,#007a55',
      ],
    }"
    :round="round"
    :bar-width="barWidth"
    :bar-gap="barGap"
    :data="[
      [100, 150, 500, 250, 400],
      [47, 100, 100, 430, 210]
    ]"
    ></pa-bar-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
      round: {
        default: boolean('round', false)
      },
      barWidth: {
        default: number('barWidth', 10)
      },
      barGap: {
        default: text('barGap', '1%')
      }
    }
  }))
})

stories.add('With dataset', () => ({
  template: `<pa-bar-chart
    :title="'年度GDP'"
    :styles="{
      x:{rotate: 45, fontSize: 10},
      canvas: {
        margin: ['5%', '8%', '20%', '8%']
      },
    }"
    :dataset="[
      ['GDP', '福田区', '罗湖区', '盐田区',
      '南山区', '宝安区', '龙华区', '光明区',
      '龙岗区', '坪山区', '大鹏新区'],
      ['2016', 3574.5612, 1976.2459, 540.2693,
      3978.4758, 3071.2452, 1884.5820, 742.0341,
      3470.4725, 530.7729, 311.0454],
      ['2017', 3820.5692, 2161.6969, 585.9975,
      4617.7993, 3453.1796, 2139.4243,
      852.2589, 3871.1358, 607.9395, 331.2546]
    ]">
    </pa-bar-chart>`
}))

stories.add('With presets', () => ({
  template: `<pa-bar-chart
    :preset="'gdp-by-years'"
    :styles="{
      canvas: {
        margin: ['5%', '8%', '20%', '8%']
      },
      x:{
        rotate: 45,
        fontSize: 10
      }
    }"
    :title="'年度GDP'"
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
        :legend="['同比增长']"
        :data="[[6.88, 9.38, 8.46, 16.1, 12.4, 13.5, 14.9, 11.5, 14.5, 6.50]]"></pa-line-chart>
    </pa-bar-chart>`
}))

stories.add('With hooks', () => ({
  template: `<pa-bar-chart
    :title="'简单柱形图'"
    :beforePaint="beforePaint"
    :data="[
      [100, 150, 500, 250, 400],
      [47, 100, 100, 430, 210]
    ]"
    ></pa-bar-chart>`,
  props: {
    beforePaint: (options) => {
      console.log('/////////', options)
    }
  }
}))

export default stories
