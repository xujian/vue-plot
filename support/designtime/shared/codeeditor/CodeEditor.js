import ace from 'brace'

export default Vue.extend({
  render: function (h) {
    var height = this.height ? this.px(this.height) : '100%'
    var width = this.width ? this.px(this.width) : '100%'
    return h('div', {
      attrs: {
        style: 'height: ' + height + '; width: ' + width
      }
    })
  },
  props: {
    value: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'solarized_dark'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data: function () {
    return {
      editor: null,
      contentBackup: ''
    }
  },
  methods: {
    px: function (n) {
      if (/^\d*$/.test(n)) {
        return n + 'px'
      }
      return n;
    }
  },
  watch: {
    value: function (val) {
      if (this.contentBackup !== val) {
        this.editor.session.setValue(val, 1)
        this.contentBackup = val
      }
    },
    theme: function (newTheme) {
      this.editor.setTheme('ace/theme/' + newTheme)
    },
    lang: function (newLang) {
      this.editor.getSession().setMode('ace/mode/' + newLang)
    },
    options: function (newOption) {
      this.editor.setOptions(newOption)
    },
    height: function () {
      this.$nextTick(function () {
        this.editor.resize()
      })
    },
    width: function () {
      this.$nextTick(function () {
        this.editor.resize()
      })
    }
  },
  beforeDestroy: function () {
    this.editor.destroy()
    this.editor.container.remove()
  },
  mounted: function () {
    var vm = this
    var lang = this.lang || 'javascript'
    var theme = this.theme || 'solarized_dark'
    var editor = vm.editor = ace.edit(this.$el)
    this.$emit('init', editor)
    require('brace/theme/solarized_dark')
    require('brace/mode/javascript')
    editor.$blockScrolling = Infinity
    editor.getSession().setMode('ace/mode/' + lang)
    editor.setTheme('ace/theme/' + theme)
    editor.setValue(this.value, 1)
    this.contentBackup = this.value
    editor.on('change', function () {
      var content = editor.getValue()
      vm.$emit('input', content)
      vm.contentBackup = content
    })
    editor.setOptions({
      highlightActiveLine: false,
      showGutter: false,
      showLineNumbers: false,
      vScrollBarAlwaysVisible: false
    })
  }
})
