import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import PaLineChart from './Line.ts'

let stories = storiesOf('基本图表|Line', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let states = [
  {
    name: 'Simple',
    template: `<pa-line-chart
      :smooth="smooth"
      :line-width="lineWidth"
      :data="[
        [100, 150, 500, 250, 400],
        [47, 100, 100, 430, 210]
      ]"
      ></pa-line-chart>`
  },
  {
    name: 'Has label',
    template: `<pa-line-chart
      :smooth="smooth"
      :line-width="lineWidth"
      :styles="{label:'top'}"
      :data="[
        [100, 150, 500, 250, 400],
        [47, 100, 100, 430, 210]
      ]"
      ></pa-line-chart>`
  },
  {
    name: 'Has area',
    template: `<pa-line-chart
      :smooth="smooth"
      :area="true"
      :line-width="lineWidth"
      :data="[
        [100, 150, 500, 250, 400],
        [47, 100, 100, 430, 210]
      ]"
      ></pa-line-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    components: { PaLineChart },
    template: s.template,
    props: {
      smooth: {
        default: boolean('smooth', false)
      },
      lineWidth: {
        default: number('lineWidth', 2)
      }
    }
  }))
})

export default stories
