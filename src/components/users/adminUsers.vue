<template>
  <v-row v-if="users">
    <v-col v-for="(user, index) in users" :key="index" sm="4">
      <v-card elevation="2">
        <v-list lines="3">
          <v-list-item
            :title="`${user.firstName} ${user.lastName}`"
            :subtitle="user.email"
          >
            <template v-slot:prepend>
              <v-avatar size="42" color="grey">
                <v-img
                  v-if="user.profilePictureAzureName"
                  :src="`${$azureBlobURL}${user.profilePictureAzureName}`"
                ></v-img>

                {{ user.firstName[0] }}
              </v-avatar>
            </template>
          </v-list-item>
        </v-list>
        <v-card-text>
          <template
            v-for="(value, key, index) in $lodash.pick(user, [
              'isActive',
              'isAdmin',
              'isGymAdmin',
              'isTrainer',
              'isTrainee',
            ])"
            :key="index"
          >
            <v-chip
              v-if="value"
              color="success"
              size="small"
              prepend-icon="mdi-check-circle-outline"
              class="mr-1"
            >
              {{ getStatus(key) }}
            </v-chip>
          </template>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "adminUsersComponent",
  data: () => ({
    users: null,
  }),
  created() {
    this.getAdminUsers();
  },

  computed: {
    azureBlobUrl() {
      return import.meta.env.VITE_AZURE_BLOB_URL;
    },
  },

  methods: {
    getAdminUsers() {
      this.$axios.get("backendUsers/all").then((response) => {
        console.log(response);
        this.users = response.data;
      });
    },
    getStatus(status) {
      let temp = this.$lodash.split(this.$lodash.startCase(status), " ");
      return this.$lodash.join(this.$lodash.slice(temp, 1, temp.length), " ");
    },
  },
};
</script>

<style>
</style>