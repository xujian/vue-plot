import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|用户界面元件', module)


stories.add('容器', () => ({
  template: `<pa-box>
      <pa-button>显示全部</pa-button>
    </pa-box>`
}))

export default stories
