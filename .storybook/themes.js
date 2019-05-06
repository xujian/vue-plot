import { create } from '@storybook/theming'

const dark = create({
  base: 'dark',

  colorPrimary: '#009688', // primary color
  colorSecondary: '#e57373', // secondary color

  appBg: '#333',
  appContentBg: '#222',
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: 0,

  fontBase: '"Helvetica", Arial, sans-serif',
  fontCode: 'Monaco, monospace',

  textColor: '#FFFFFF',
  textInverseColor: '#333333',

  barTextColor: '#999999',
  barSelectedColor: '#009688',
  barBg: '#293e3a',

  inputBg: '#333',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#eee',
  inputBorderRadius: 0,
  brandTitle: '标准图表库',
  brandUrl: 'https://chartlib.pingan.com.cn',
  brandImage: '/logo.png',
})

export default {
  dark
}