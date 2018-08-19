import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'component': true,
    'usingComponents': {
      'i-button': '../../../node_modules/iview-weapp/dist/button/index'
    }
  }
}
