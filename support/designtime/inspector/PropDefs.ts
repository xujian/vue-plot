import PropTypes from './PropTypes'
/**
 * 包含对指定组件的属性定义
 */
const charts = [
  {
    name: 'round',
    options: {
      type: Boolean,
      label: '圆角柱条'
    }
  },
  {
    name: 'barGap',
    options: {
      type: PropTypes.Percent,
      label: '柱条间距'
    }
  },
  {
    name: 'barWidth',
    options: {
      type: Number,
      label: '柱条宽度'
    }
  },
  {
    name: 'lineWidth',
    options: {
      type: Number,
      label: '线型宽度'
    }
  },
  {
    name: 'stack',
    options: {
      type: Boolean,
      label: '堆叠'
    }
  },
  {
    name: 'smooth',
    options: {
      type: Boolean,
      label: '平滑曲线'
    }
  }
] 

export default {
  charts
}
