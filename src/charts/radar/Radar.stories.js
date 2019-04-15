import { storiesOf } from '@storybook/vue'
import { boolean, number, text } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|Radar', module)

let states = [
  {
    name: 'Simple',
    template: `<pa-radar-chart
    :data="'mocks:radar-simple'"
    ></pa-radar-chart>`
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
