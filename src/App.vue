<template>
  <component :is="getLayout" />
</template>

<script>
import defaultLayout from "@/layouts/default.vue";
import publicLayout from "@/layouts/public.vue";
import { APP_LAYOUTS } from "./layouts/enums";
export default {
  computed: {
    getLayout() {
      switch (this.$route.meta.layout) {
        case APP_LAYOUTS.PUBLIC:
          return publicLayout;

        default:
          return defaultLayout;
      }
    },
  },
};
</script>

<style>
</style>


