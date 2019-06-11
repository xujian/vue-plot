import { storiesOf } from '@storybook/vue'
let stories = storiesOf('UI|跑马灯', module)

stories.add('Simple', () => ({
  template: `<pa-marquee
    :title="'跑马灯'"
    :rows="1"
    :pauseOnHover="true"
    :transitionDuration="950"
    :transitionDelay="10"
    :transition="'ease-in'"
    :data="[
      '跑马灯', '好酷', '棒棒棒', 'so cool'
    ]"
    ></pa-marquee>`,
}))

export default stories
