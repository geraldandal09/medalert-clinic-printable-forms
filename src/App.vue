<template>
  <div>
    <TemplateSelector
      :templates="templates"
      v-model="selectedTemplate"
    />

    <PrintLayout>
      <component :is="selectedTemplateComponent" />
    </PrintLayout>
  </div>
</template>

<script>
import TemplateSelector from './components/TemplateSelector.vue'
import PrintLayout from './components/PrintLayout.vue'

import CardioClearanceTemplate from './templates/CardioClearanceTemplate.vue'
import DoctorReferralTemplate from './templates/DoctorReferralTemplate.vue'
import MedicalCertificateTemplate from './templates/MedicalCertificateTemplate.vue'
import PrescriptionTemplate from './templates/PrescriptionTemplate.vue'

export default {
  components: {
    TemplateSelector,
    PrintLayout,
    CardioClearanceTemplate,
    DoctorReferralTemplate,
    MedicalCertificateTemplate,
    PrescriptionTemplate
  },

  data() {
    return {
      templates: [],
      selectedTemplate: ''
    }
  },

  computed: {
    selectedTemplateComponent() {
      return this.selectedTemplate || null
    }
  },

  mounted() {
    fetch('/print-options-manifest.json')
      .then(res => res.json())
      .then(data => {
        this.templates = data.templates
      })
  }
}
</script>
