import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|数据表格', module)


stories.add('Simple', () => ({
  template: `<pa-table
    :title="'简单表格'"
    :header="true"
    :theme="'dark'"
    :class="'border-rows'"
    :data="[
      [100, 150, 500, 250, 400],
      [47, 100, 100, 430, 210]
    ]"
    ></pa-table>`
}))

export default stories
