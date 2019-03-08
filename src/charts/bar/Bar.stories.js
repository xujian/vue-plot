import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaBuendia from './Buendia'

let stories = storiesOf('Components/Buendia', module)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-buendia
    :round="round"
    >Sample buendia</pa-buendia>`
  },
  {
    name: 'With color',
    template: `<pa-buendia
    :round="round"
    color="primary"
    >Sample buendia</pa-buendia>`
  }
]

// 代入动态story template
stories.addDecorator((storyFn, context) => {
  console.log('addDecorator storyFn', storyFn(), context)
  let story = storyFn()
  let sourceFn = withStorySource('<h1>Demo</h1>')
  console.log('withStorySource ---------------', withStorySource)
  return sourceFn(storyFn, context)
})

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaBuendia },
      props: {
        round: {
          type: Boolean,
          default: boolean('round', false)
        },
        text: {
          type: String,
          default: text('text', 'Sample buendia')
        }
      },
      template: s.template
    }
  })
})
