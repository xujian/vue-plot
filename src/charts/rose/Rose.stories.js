import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text, array } from '@storybook/addon-knobs'
import PaRoseChart from './Rose'

let stories = storiesOf('Charts|Rose', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let states = [
  {
    name: 'Simple',
    template: `<pa-rose-chart
      :radius="radius"
      :half="half"
      :data="[[
        { name: 'A', value: 98 },
        { name: 'B', value: 110 },
        { name: 'C', value: 130 },
        { name: 'D', value: 135 },
        { name: 'E', value: 180 },
        { name: 'F', value: 201 },
        { name: 'G', value: 231 },
        { name: 'H', value: 270 },
        { name: 'I', value: 279 }
      ]]"
      ></pa-rose-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
      radius: {
        default: array('radius', ['20%', '100%'])
      },
      half: {
        default: boolean('half', false)
      }
    }
  }))
})

export default stories
