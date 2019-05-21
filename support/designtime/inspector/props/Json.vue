<template>
  <div class="prop-json">
    <div class="prop-label row">
      <div class="col">
        <h6>{{ prop.label }}</h6>
      </div>
      <div class="col text-right">
        <q-btn
          size="xs"
          label="保存"
          @click="onSave" />
      </div>
    </div>
    <div class="editor" style="height: 260px;">
      <pa-code-editor
        ref="input"
        :value="jsonValue"
        :options="options" />
    </div>
    <q-banner v-if="errorMessage"
      dense dark
      class="bg-primary">
      {{ errorMessage }}
    </q-banner>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QRange, QBanner } from 'quasar'
import { Component } from 'vue-property-decorator'

let PaCodeEditor = require('../../shared/codeeditor/CodeEditor.js')

@Component({
  name: 'PaJsonProp',
  components: {
    QRange,
    QBanner,
    PaCodeEditor
  }
})
export default class PaJsonProp extends PropInput {
  options: object = {
  }
  errorMessage: string = ''
  get jsonValue () {
    return JSON.stringify(this.prop && this.prop.value && this.prop.value.value || {}, null, 2)
  }
  onSave () {
    let content: string = this.$refs.input.editor.getValue()
    try {
      content = content.trim() || '{}'
      let parsed = JSON.parse(content)
      this.errorMessage = ''
      this.emitChange({
        ...this.prop,
        value: parsed
      })
    } catch (e) {
      this.errorMessage = '格式错误'
    }
  }
}
</script>
