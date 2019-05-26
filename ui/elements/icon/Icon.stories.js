import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|图标集', module)


stories.add('Font Awesome', () => ({
  template: `<pa-icon
    :name="'user'"
    ></icon>`
}))

export default stories
