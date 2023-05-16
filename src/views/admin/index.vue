<template>
  <v-row v-if="data">
    <v-col v-for="(value, key, index) in data" :key="index" sm="3">
      <v-card>
        <v-card-text class="text-grey-darken-2">
          <div class="d-flex align-center">
            <div class="flex-shrink-1 pr-10">
              <v-icon size="54" color="primary">{{ statIcon[key] }}</v-icon>
            </div>
            <div class="flex-grow-1">
              <div class="text-h4 font-weight-bold">{{ value }}</div>
              <div class="text-body-1">{{ $lodash.startCase(key) }}</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script>
export default {
  setup() {
    const statIcon = {
      usersCount: "mdi-account-multiple",
      gymsCount: "mdi-dumbbell",
      trainersCount: "mdi-human-queue",
      traineesCount: "mdi-account-group-outline",
    };
    return {
      statIcon,
    };
  },
  data: () => ({
    data: null,
  }),

  created() {
    this.getStats();
  },

  methods: {
    getStats() {
      this.$axios.get(`dashboards/admin/stats`).then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>
  