<template>
  <div class="no-print">
    <h2>Select Template</h2>

    <select :value="value" @change="$emit('input', $event.target.value)">
      <option value="">-- Select --</option>
      <option
        v-for="t in templates"
        :key="t.name"
        :value="t.name"
      >
        {{ t.label }}
      </option>
    </select>

    <button @click="print">Print</button>
  </div>
</template>

<script>
export default {
  props: {
    templates: Array,
    value: String
  },
  methods: {
    print() {
      window.print()
    }
  }
}
</script>
