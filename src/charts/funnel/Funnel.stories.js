import { storiesOf } from '@storybook/vue'
import { text, number, array } from '@storybook/addon-knobs'

let stories = storiesOf('基本图表|Funnel', module)

let states = [
  {
    name: 'Simple',
    template: `<pa-funnel-chart
    :title="'漏斗图'"
    :data="'mocks:funnel-simple'"
    :sort="'ascending'"
    :canPosition="{'left':'5%','right':'35%','top':'10%','bottom':'10%'}"
    :nameOrValue="'name-value'"
    >
    </pa-funnel-chart>`
  }
]   
states.forEach(s => {
  stories.add(s.name, () => ({
    template: s.template,
    props: {
    }
  }))
})
export default stories
