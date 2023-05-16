<template>
  <v-app>
    <v-app-bar color="transparent" dense height="55" elevation="0">
      <v-spacer></v-spacer>

      <theme-toggle />
    </v-app-bar>
    <v-main>
      <v-container id="app-container" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import themeToggle from "@/components/generic/themeToggle.vue";

export default {
  components: {
    themeToggle,
  },
};
</script>

<style scoped>
#app-container {
  height: calc(100vh);
}
</style>