import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaBuendia from './Buendia'

let stories = storiesOf('Components/Buendia', module)
console.log('sotries---', stories)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-buendia
    :round="roundProp"
    >Sample buendia</pa-buendia>`
  },
  {
    name: 'With color',
    template: `<pa-buendia
    :round="roundProp"
    color="primary"
    >Sample buendia</pa-buendia>`
  }
]

// 代入动态story template
stories.addDecorator((storyFn, context) => {
  let story = storyFn()
  let sourceFn = withStorySource(story.template)
  return sourceFn(storyFn, context)
})

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaBuendia },
      props: {
        roundProp: {
          type: Boolean,
          default: boolean('round', false)
        },
        textProp: {
          type: String,
          default: text('text', 'Sample buendia')
        }
      },
      template: s.template
    }
  })
})
