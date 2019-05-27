import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|交互组件', module)


stories.add('对话框', () => ({
  template: `<div>
    <pa-button>弹出对话框</pa-button>
    <pa-popup
      name="conda">
      <pa-table
      :title="'简单表格'"
      :header="true"
      :theme="'dark'"
      :class="'border-rows'"
      :data="[
        [100, 150, 500, 250, 400],
        [47, 100, 100, 430, 210]
      ]"
      ></pa-table>
    </pa-popup>
  </div>`
}))

export default stories
