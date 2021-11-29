
<template>
  <div class="flex justify-center">
    <img src="/screen.png" class="w-full">
  </div>
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

  }
})
</script>
