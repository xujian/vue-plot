import echarts from 'echarts'
import dark from './dark'
import warm from './warm'
import cold from './cold'

const themes = [
  {
    name: 'dark',
    theme: dark
  },
  {
    name: 'warm',
    theme: warm
  },
  {
    name: 'cold',
    theme: cold
  }
]

class ThemeManager {
  static init () {
    themes.forEach(t => {
      echarts.registerTheme(t['name'], t['theme'])
    })
  }
  static register (name: string, theme: object) {
    echarts.registerTheme(name, theme)
  }
}

export default ThemeManager