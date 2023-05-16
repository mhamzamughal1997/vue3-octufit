<template>
  <v-app>
    <v-navigation-drawer v-if="$auth.isLoggedIn" app color="black">
      <v-list>
        <v-list-item
          :prepend-avatar="`${azureBlobURL}${user.profilePictureAzureName}`"
          :title="`${user.firstName} ${user.lastName}`"
          :subtitle="user.email"
          class="my-2"
        >
        </v-list-item>
      </v-list>
      <v-list>
        <template v-for="(value, key, index) in appRoutes" :key="index">
          <v-list-subheader class="text-white">{{
            $lodash.startCase(key)
          }}</v-list-subheader>
          <v-list-item
            v-for="(item, i) in value"
            :key="i"
            :to="{ name: item.route.name }"
            link
            active-color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-list-item
            color="primary"
            title="Logout"
            @click="
              $auth.clearAuth();
              $router.push('/login');
            "
          >
            <template v-slot:append>
              <v-icon size="18" color="white">mdi-logout</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar v-if="$auth.isLoggedIn" color="primary" dense height="55">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon color="">mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Vue3</v-toolbar-title>
      <v-spacer></v-spacer>
      <app-loading />
      <theme-toggle />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row class="justify-center">
          <v-col :cols="drawer ? '12' : '12'">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>
  
  <script>
import themeToggle from "@/components/generic/themeToggle.vue";
import { FILTERED_ROUTE } from "@/router";
import AppLoading from "@/components/generic/appLoading.vue";
export default {
  components: {
    themeToggle,
    AppLoading,
  },
  setup() {
    return {
      azureBlobURL: import.meta.env.VITE_AZURE_BLOB_URL,
    };
  },
  data: () => ({
    drawer: true,
    counterStore: null,
  }),
  computed: {
    isLoggedIn() {
      return this.$auth.isLoggedIn;
    },
    user() {
      return this.$auth.user;
    },
    appRoutes() {
      return this.$lodash.groupBy(FILTERED_ROUTE, "section");
    },
  },
};
</script>
  
  <style>
</style>
  
  
  