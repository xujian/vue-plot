import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|跑马灯', module)

stories.add('Simple', () => ({
  template: `<pa-marquee
    :rows="1"
    :pauseOnHover="true"
    :transitionDuration="500"
    :transitionDelay="400"
    :transition="'ease-in'"
    :scale="0.8"
    :circular="false"
    :data="[
      '贡婉     513436200006119377     151XXXX2943', '施萱      513436200006116811', '公孙舒    513436200006117945'
    ]"
    :title="'实时注册'"
    ></pa-marquee>`,
}))

export default stories
