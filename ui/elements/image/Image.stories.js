import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|图片库', module)


stories.add('图片库', () => ({
  template: `<pa-image
    :url="'/lib/'"
    ></pa-image>`
}))

export default stories
