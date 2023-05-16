import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

import App from "@/App.vue";
import router from "./router";

import "./assets/main.css";

import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import lodash from "./plugins/lodash";

/* Third party library */
import axios from "./plugins/axios";
import appStore from "./plugins/auth";

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(lodash);
app.use(axios);
app.use(appStore);

app.config.globalProperties.$azureBlobURL = import.meta.env.VITE_AZURE_BLOB_URL;

app.mount("#app");
