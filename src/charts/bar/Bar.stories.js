import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('Charts|Bar', module)
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
      background: '#333'
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
        'gradient:#00eafc,#009aff',
        'gradient:#fff85d,#ffff5f',
      ],
      background: '#333'
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

stories.add('With presets', () => ({
  template: `<pa-bar-chart
    :preset="'gdp-by-years'"
    :title="'年度GDP'"
    :styles="{label:{rotate: 45, fontSize: 10}}"
    :dataset="'mocks:gdp-by-years-dataset'">
    </pa-bar-chart>`
}))

export default stories
