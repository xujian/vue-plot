import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|Network', module)

let states = [
  {
    name: 'Simple',
    template: `<pa-network-chart
    :title="'网络图'"
    :symbol="symbol"
    :data="'mocks:network-simple'">
    <pa-flow :label="'%'"></pa-flow>
    </pa-network-chart>`,
  },
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
      symbol: {
        default: number('symbol', 40),
      },
      links: {},
    },
  }))
})
export default stories
