<template>
  <v-progress-circular
    v-if="loading"
    color="white"
    size="26"
    width="3"
    indeterminate
  ></v-progress-circular>
</template>

<script>
export default {
  name: "appLoading",
  computed: {
    loading() {
      return this.$appStore.loading;
    },
  },
};
</script>

<style>
</style>