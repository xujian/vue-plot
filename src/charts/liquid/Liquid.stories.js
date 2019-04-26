import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|Liquid', module)

let states = [
  {
    name: 'Simple',
    template: `<pa-liquid-chart
    :data="[
      [0.71, 0.7, 0.69],
      [0.28, 0.27, 0.26],
      [0.01, 0, -0.01]
    ]"
    :styles="{
      label: { fontSize: '32px' }
    }"
    ></pa-liquid-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
    }
  }))
})

export default stories
