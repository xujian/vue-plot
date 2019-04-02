import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import PaBarChart from './Bar.ts'

let stories = storiesOf('标准图表库|柱形图', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let props = {
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

let states = [
  {
    name: 'Simple',
    template: `<pa-bar-chart
      ref="chart"
      :round="round"
      :bar-width="barWidth"
      :bar-gap="barGap"
      :data="[
        [100, 150, 500, 250, 400],
        [47, 100, 100, 430, 210]
      ]"
      ></pa-bar-chart>`,
    components: { PaBarChart }
  }
]

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: s.components,
      props,
      template: s.template
    }
  })
})

export default stories
