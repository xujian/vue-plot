import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaLineChart from './Line.ts'

let stories = storiesOf('Components|Charts|LineChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-line-chart
    ></pa-line-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaLineChart },
      props: {},
      template: s.template
    }
  })
})

export default stories
