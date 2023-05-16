<template>
  <v-card elevation="3" height="100%">
    <v-card-text>
      <div class="text-h5">Sign in</div>
      <div>Stay updated with your app</div>
    </v-card-text>
    <v-card-text>
      <v-form ref="loginForm">
        <v-text-field
          v-model="form.email"
          label="Email"
          variant="underlined"
          :rules="[formRules.required]"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          label="Password"
          variant="underlined"
          :type="hidePassword ? 'password' : 'text'"
          :append-inner-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:appendInner="hidePassword = !hidePassword"
          :rules="[formRules.required]"
        >
        </v-text-field>
        <router-link to="#">Forgot Password?</router-link>
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-btn block color="primary" @click="submitForm" :loading="loading"
        >Login</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    hidePassword: true,
    form: {
      email: null,
      password: null,
    },
    loading: false,
    formRules: {
      required: (v) => !!v || "Required",
    },
  }),

  methods: {
    submitForm() {
      let authData = null;
      if (this.$refs.loginForm.validate()) {
        this.loading = true;
        this.$axios
          .post("users/auth", this.form)
          .then((res) => {
            const { data } = res;
            authData = data;

            const config = {
              headers: {
                Authorization: "Bearer " + authData.token,
              },
            };

            return this.$axios.get("users", config);
          })
          .then((response) => {
            let data = {
              token: authData.token,
              roles: authData.roles,
              user: response.data,
            };
            this.$auth.setAuth(data);
            this.$router.push("/");
          })
          .catch((e) => {
            this.$auth.clearAuth();
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style>
</style>