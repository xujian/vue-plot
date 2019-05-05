<template>
  <div class="prop-json">
    <div class="prop-label">{{prop.label}}</div>
    <div class="editor" style="height: 60px;">
      <pa-code-editor :value="'{}'"></pa-code-editor>
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { QRange, QBadge } from 'quasar'
import { Component } from 'vue-property-decorator'

let PaCodeEditor = require('../../shared/codeeditor/CodeEditor.js')

@Component({
  name: 'PaString',
  components: {
    QRange,
    QBadge,
    PaCodeEditor
  }
})
export default class PaString extends PropInput {
  
  onChange (val: any) {
    this.emitChange({
      ...this.prop,
      value: val
    })
  }
}
</script>

<style>

</style>
