<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12">
        <v-row justify="space-between">
          <v-col sm="4" class="text-primary">
            <div class="text-h2">Vue 3</div>
            <div class="mb-10 text-h6">A web app development framework</div>
            <img src="@/assets/login.svg" height="350" />
          </v-col>
          <v-col sm="4"><login-form /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
    
<script>
import loginForm from "@/components/forms/loginForm.vue";
export default {
  components: { loginForm },
};
</script>
    
<style>
</style>