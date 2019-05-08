<template>
  <div class="prop-json">
    <div class="prop-label row">
      <div class="col">
        <h6>{{prop.label}}</h6>
      </div>
      <div class="col text-right">
        <q-btn 
          size="xs"
          @click="onSave"
          label="保存"></q-btn>
      </div>
    </div>
    <div class="editor" style="height: 260px;">
      <pa-code-editor
        ref="input"
        :value="jsonValue"
        :options="options"></pa-code-editor>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QRange, QBadge } from 'quasar'
import { Component } from 'vue-property-decorator'

let PaCodeEditor = require('../../shared/codeeditor/CodeEditor.js')

@Component({
  name: 'PaJsonProp',
  components: {
    QRange,
    QBadge,
    PaCodeEditor
  }
})
export default class PaString extends PropInput {
  options: object = {
  }
  get jsonValue () {
    return JSON.stringify(this.prop.value.value, null, 2)
  }
  onSave () {
    let content: string = this.$refs.input.editor.getValue()
    this.emitChange({
      ...this.prop,
      value: JSON.parse(content)
    })
  }
}
</script>