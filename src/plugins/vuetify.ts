import { createVuetify, type ThemeDefinition } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

export const appLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#ebebeb",
    surface: "#ebebeb",
    primary: "##1abc5a",
    "primary-darken-1": "#12843f",
    secondary: "##2c3e50",
    "secondary-darken-1": "#1a2530",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
export const appDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#141414",
    surface: "#2e2e2e",
    primary: "##1abc5a",
    "primary-darken-1": "#12843f",
    secondary: "##2c3e50",
    "secondary-darken-1": "#1a2530",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", // This is already the default value - only for display purposes
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: appLightTheme,
      dark: appDarkTheme,
    },
  },
});
