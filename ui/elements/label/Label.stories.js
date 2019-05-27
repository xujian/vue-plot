import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|用户界面元件', module)


stories.add('Font Awesome', () => ({
  template: `<pa-label
    class="normal"
    >政务服务运行监控</pa-label>`
}))

export default stories
