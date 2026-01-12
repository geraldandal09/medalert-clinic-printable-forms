import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import moment from 'moment'
import { upperFirst, camelCase } from 'lodash'
import ToggleButton from 'vue-js-toggle-button'

import PrintApp from './PrintApp.vue'
import PrintLayout from './PrintLayout.vue'

// Vue Configuration
Vue.config.productionTip = true

// Autoload components and templates
// see https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components

const requireComponent = require.context(
  './components',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

const requireTemplate = require.context(
  './templates',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireTemplate.keys().forEach(fileName => {
  const templateConfig = requireTemplate(fileName)
  const templateName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    templateName,
    templateConfig.default || templateConfig
  )
})

// Register default print layout
Vue.component('default-print-layout', PrintLayout);

// Setup data stores
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    debugMode: false,
    printOptions: {
      template: null,
      paperSize: null,
    },
    formData: {},
  },
  mutations: {
    setPaperSize: (state, paperSize) => {
      state.printOptions = {
        ...state.printOptions,
        paperSize,
      }

      document.body.className = paperSize
    },
    setPrintTemplate: (state, template) => {
      state.printOptions = {
        ...state.printOptions,
        template,
      }
    },
    setFormData: (state, formData) => {
      state.formData = {
        ...formData,
      }
    },
    setDebugMode: (state, debugMode) => {
      state = {
        ...state,
        debugMode
      }
    },
  }
})

Vue.mixin({
  data() {
    return {
      dynamicFields: {},
    }
  },
  computed: mapState([
    'debugMode',
    'printOptions',
    'paperSize',
    'formData',
  ]),
  methods: {
    registerEditableFields: function (fields) {
      this.dynamicFields = fields;
    }
  }
})

// Setup Addons
Vue.use(ToggleButton)

Vue.filter('formatDate', function (value, dateFormat) {
  if (value) {
    return moment(String(value)).format(dateFormat)
  }
})

// Initialize the Vue application
new Vue({
  render: h => h(PrintApp),
  store,
}).$mount('#app')

// Functions for updating content from external source
window.setPaperSize = (paperSize) => {
  store.commit('setPaperSize', paperSize);
}

window.setPrintTemplate = (template) => {
  store.commit('setPrintTemplate', template);
}

window.setFormData = (formData) => {
  store.commit('setFormData', formData);
}

window.setDebugMode = (debugMode) => {
  store.commit('setDebugMode', debugMode);
}

// The following lines are for testing
// Faker is used to generate test content

// import faker from 'faker';

// const $_GET = {};
// if (document.location.toString().indexOf('?') !== -1) {
//   const query = document.location
//     .toString()
//     .replace(/^.*?\?/, '')
//     .replace(/#.*$/, '')
//     .split('&');

//   for (let i = 0, l = query.length; i < l; i++) {
//     const aux = decodeURIComponent(query[i]).split('=');
//     $_GET[aux[0]] = aux[1];
//   }
// }

// window.setPrintTemplate($_GET['template'])
// window.setPaperSize('A5')

// const sampleForm = {
//   doctor: {
//     first_name: faker.fake("{{name.lastName}}"),
//     last_name: faker.fake("{{name.firstName}}"),
//     license_number: '20200119',
//     specialization: 'Pediatrics',
//     clinics: [],
//   },
//   patient: {
//     first_name: faker.fake("{{name.lastName}}"),
//     last_name: faker.fake("{{name.firstName}}"),
//     birth_date: faker.date.past().toDateString(),
//   },
//   prescription: {
//     prescription_code: faker.fake("{{random.number}}"),
//     secure_payload: {
//       home_instructions: faker.fake("{{lorem.sentence}}"),
//       medications: [],
//     }
//   },
// };

// // Generate medicine data
// for(let i = 0; i < 20; i++) {
//   sampleForm.prescription.secure_payload.medications.push({
//     generic_name: faker.fake("{{commerce.productMaterial}}"),
//     brand_name: faker.fake("{{commerce.productName}}"),
//     formulation: `${(i+1)*100} mg`,
//     sig: faker.fake("{{lorem.sentence}}"),
//   })
// }

// for (let i = 0; i < 2; i++) {
//   sampleForm.doctor.clinics.push({
//     name: faker.fake("{{company.companyName}}"),
//     address: faker.fake("{{address.streetAddress}}"),
//     locality: faker.fake("{{address.city}}"),
//     contact_number: faker.fake("{{phone.phoneNumber}}"),
//     appointments_hotline: faker.fake("{{phone.phoneNumber}}"),
//   })
// }

// window.setFormData(sampleForm)
// window.setDebugMode(true)
