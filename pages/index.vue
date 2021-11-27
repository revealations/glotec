<template>
  <div>{{ addNumber(1, 1) }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    addNumber (a: number, b: number): string {
      return (a + b).toString()
    }
  }
})
</script>
