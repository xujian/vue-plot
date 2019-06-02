import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|用户界面元件', module)


stories.add('复合组件', () => ({
  template: `<pa-board
    :title="'服务建设'">
    <pa-bar-chart
    style="top:0;left:0;width:200px;height:100px;"
    :data="[
      [100, 150, 500, 250, 400],
      [47, 100, 100, 430, 210]
    ]"
    ></pa-bar-chart>
  </pa-board>`
}))

export default stories
