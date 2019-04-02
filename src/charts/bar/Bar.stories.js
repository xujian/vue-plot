import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import PaBarChart from './Bar.ts'

let stories = storiesOf('Components|BarChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Simple',
    template: `<div>
      <pa-bar-chart
      ref="chart"
      :round="round"
      :bar-width="barWidth"
      :bar-gap="barGap"
      :data="[
        [100, 150, 500, 250, 400],
        [47, 100, 100, 430, 210]
      ]"
      ></pa-bar-chart>
      <button @click="$refs.chart.repaint()">Repaint</button>
    </div>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaBarChart },
      props: {
        round: {
          type: Boolean,
          default: boolean('round', false)
        },
        barWidth: {
          type: Number,
          default: number('barWidth', 10)
        },
        barGap: {
          type: String,
          default: text('barGap', '1%')
        }
      },
      template: s.template
    }
  })
})

export default stories
