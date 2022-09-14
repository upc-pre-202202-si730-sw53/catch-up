<template>
  <pv-select-button
      v-model="$i18n.locale"
      :options="languages"
      class="bg-primary uppercase"></pv-select-button>
</template>

<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es']
    }
  }
}
</script>

<style scoped>

</style>
