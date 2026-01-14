/* eslint-disable no-unused-vars */

import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import moment from 'moment'
import { upperFirst, camelCase } from 'lodash'
import ToggleButton from 'vue-js-toggle-button'

/* ✅ equivalent ng: import './assets/app.css' */
import './assets/app.css'

/* ✅ equivalent ng: import App from './App.vue' */
import PrintApp from './PrintApp.vue'
import PrintLayout from './PrintLayout.vue'

/*
|--------------------------------------------------------------------------
| VUE CONFIG
|--------------------------------------------------------------------------
*/
Vue.config.productionTip = false

/*
|--------------------------------------------------------------------------
| AUTOLOAD COMPONENTS
|--------------------------------------------------------------------------
*/
const requireComponent = require.context(
  './components',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

/*
|--------------------------------------------------------------------------
| AUTOLOAD TEMPLATES
|--------------------------------------------------------------------------
*/
const requireTemplate = require.context(
  './templates',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireTemplate.keys().forEach(fileName => {
  const templateConfig = requireTemplate(fileName)
  const templateName = upperFirst(
    camelCase(
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    templateName,
    templateConfig.default || templateConfig
  )
})

/*
|--------------------------------------------------------------------------
| DEFAULT PRINT LAYOUT
|--------------------------------------------------------------------------
*/
Vue.component('default-print-layout', PrintLayout)

/*
|--------------------------------------------------------------------------
| VUEX STORE
|--------------------------------------------------------------------------
*/
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    debugMode: false,
    printOptions: {
      template: 'DoctorLetterhead', // ✅ default template
      paperSize: 'A5',
    },
    formData: {},
  },

  mutations: {
    setPaperSize(state, paperSize) {
  state.printOptions.paperSize = paperSize
  document.body.className = paperSize   
},

    setPrintTemplate(state, template) {
      state.printOptions.template = template
    },

    setFormData(state, formData) {
      state.formData = { ...formData }
    },

    setDebugMode(state, debugMode) {
      state.debugMode = debugMode
    },
  },
})

/*
|--------------------------------------------------------------------------
| GLOBAL MIXIN
|--------------------------------------------------------------------------
*/
Vue.mixin({
  data() {
    return {
      dynamicFields: {},
    }
  },

  computed: mapState([
    'debugMode',
    'printOptions',
    'formData',
  ]),

  methods: {
    registerEditableFields(fields) {
      this.dynamicFields = fields
    },
  },
})

/*
|--------------------------------------------------------------------------
| PLUGINS & FILTERS
|--------------------------------------------------------------------------
*/
Vue.use(ToggleButton)

Vue.filter('formatDate', (value, format) => {
  if (!value) return ''
  return moment(String(value)).format(format)
})

/*
|--------------------------------------------------------------------------
| APP INIT  ✅ (ito ang katumbas ng render: h => h(App))
|--------------------------------------------------------------------------
*/
new Vue({
  store,
  render: h => h(PrintApp),
}).$mount('#app')

/*
|--------------------------------------------------------------------------
| EXTERNAL API (FOR IFRAME / PARENT APP)
|--------------------------------------------------------------------------
*/
window.setPaperSize = paperSize => {
  store.commit('setPaperSize', paperSize)
}

window.setPrintTemplate = template => {
  store.commit('setPrintTemplate', template)
}

window.setFormData = formData => {
  store.commit('setFormData', formData)
}

window.setDebugMode = debugMode => {
  store.commit('setDebugMode', debugMode)
}
