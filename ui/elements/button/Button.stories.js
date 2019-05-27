import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|用户界面元件', module)


stories.add('按钮', () => ({
  template: `<pa-button
    :class="'round'"
    >查看全部</pa-button>`
}))

export default stories
