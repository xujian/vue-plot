import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { withCode } from 'storybook-addon-chartlib'
import PaBarChart from './Bar.ts'

let stories = storiesOf('Components|BarChart', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Simple',
    template: `<pa-bar-chart
    :round="round"
    :bar-width="barWidth"
    :data="[
      [100, 150, 500, 250, 400],
      [47, 100, 100, 430, 210]
    ]"
    ></pa-bar-chart>`
  }
]

stories.addDecorator((storyFn, context) => {
  let story = storyFn()
  let storyComponent = new story()
  console.log('Bar.story.js----------------------------', storyComponent)
  let code = 'Loading source...'
  try {
    code = storyComponent.$options.STORYBOOK_WRAPS.extendOptions.template
  } catch (e) {
    console.info('Get template error', e.message)
  }
  let sourceFn = withCode(code)
  return sourceFn(storyFn, context)
})

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
          default: 10
        }
      },
      template: s.template
    }
  })
})
