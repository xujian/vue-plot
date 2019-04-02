import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaPieChart from './Pie.ts'

let stories = storiesOf('Components|Charts|BarChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-pie-chart
    ></pa-pie-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaPieChart },
      props: {},
      template: s.template
    }
  })
})

export default stories
