import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import PaBarChart from './Bar.ts'

let stories = storiesOf('Charts|Bar', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let states = [
  {
    name: 'Simple',
    template: `<pa-bar-chart
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
          :label="'Y'"
          :data="['A', 'B', 'C', 'D', 'E']"></pa-axis>
        <pa-line-chart
          :axis="'right'"
          :data="[
            [0.87, 0.60, 0.76, 0.49, 0.89],
            [0.56, 0.23, 0.45, 0.78, 0.38]
          ]"
        ></pa-line-chart>
      </pa-bar-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    components: { PaBarChart },
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

export default stories
