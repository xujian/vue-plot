import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|Scatter', module)
// stories.addDecorator(withTheme)

let states = [
  {
    name: 'Simple',
    template: `<pa-scatter-chart
    :title="'简单散点图'"
    :symbol="symbol"
    :data="'mocks:scatter-simple'"
    ></pa-scatter-chart>`
  },
  {
    name: 'With markareas',
    template: `<pa-scatter-chart
    :title="'中等散点图'"
    :symbol="3"
    :x="{name: '身高(cm)'}"
    :y="{name: '体重(Kg)'}"
    :data="'mocks:scatter-medium'"
    >
      <pa-markareas mode="max-min"></pa-markareas>
    </pa-scatter-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
      symbol: {
        default: number('symbol', 10)
      }
    }
  }))
})

export default stories
