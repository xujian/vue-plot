import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import PaButton from './Button'

let stories = storiesOf('Components/Button', module)
console.log('sotries---', stories)
stories.addDecorator(withKnobs)

let states = [
  {
    name: 'Normal',
    template: `<pa-button
    :round="roundProp"
    >Sample button</pa-button>`
  },
  {
    name: 'With color',
    template: `<pa-button
    :round="roundProp"
    color="primary"
    >Sample button</pa-button>`
  }
]

// 代入动态story template
// stories.addDecorator((storyFn, context) => {
//   let story = storyFn()
//   let sourceFn = withStorySource(story.template)
//   return sourceFn(storyFn, context)
// })

states.forEach(s => {
  stories.add(s.name, () => {
    return {
      components: { PaButton },
      props: {
        roundProp: {
          type: Boolean,
          default: boolean('round', false)
        },
        textProp: {
          type: String,
          default: text('text', 'Sample button')
        }
      },
      template: s.template
    }
  })
})
