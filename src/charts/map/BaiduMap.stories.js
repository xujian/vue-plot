import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import PaBaiduMap from './BaiduMap'

let stories = storiesOf('地图|百度地图', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let states = [
  {
    name: 'Simple',
    template: `<pa-baidu-map class="full-width full-height">
      <pa-scatter-chart data="mocks:map-scatter"/>
    </pa-baidu-map>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    components: { PaBaiduMap },
    template: s.template,
    props: {
    }
  }))
})

export default stories
