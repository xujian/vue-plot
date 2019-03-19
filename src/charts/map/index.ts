import Vue from 'vue'
import PaMap from './Map'
import PaBaiduMap from './BaiduMap'
import { VueClass } from 'vue-class-component/lib/declarations';

const Plugin = {
  install (Vue: VueClass<Vue>) {
    Vue.component(PaMap.name, PaMap)
    Vue.component(PaBaiduMap.name, PaBaiduMap)
  }
}

// Vue.use(Plugin)

export default Plugin

export { PaMap, PaBaiduMap }
