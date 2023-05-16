<template>
  <v-btn icon @click="toggle">
    <v-icon>{{ !isDark ? "mdi-weather-night" : "mdi-weather-sunny" }}</v-icon>
  </v-btn>
</template>

<script>
import { useTheme } from "vuetify";
const STORAGE_KEY = "app_theme";
export default {
  name: "themeToggle",
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
  created() {
    let temp = localStorage.getItem(STORAGE_KEY);
    let theme = temp && temp == "dark" ? "dark" : "light";

    this.theme.global.name.value = theme;
  },
  methods: {
    toggle() {
      this.toggleTheme();
      localStorage.setItem(STORAGE_KEY, this.isDark ? "dark" : "light");
    },
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.current.dark;
    },
  },
};
</script>

<style>
</style>