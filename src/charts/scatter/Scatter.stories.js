import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('Charts|Scatter', module)
// stories.addDecorator(withTheme)

let states = [
  {
    name: 'Simple',
    template: `<pa-scatter-chart
    :title="'简单散点图'"
    :symbol="symbol"
    :data="'mocks:scatter-simple'"
    ></pa-scatter-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
      symbol: {
        default: number('symbol', 2)
      }
    }
  }))
})

export default stories
