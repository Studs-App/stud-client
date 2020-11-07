<template>
  <v-app>
    <v-main>
      <Profile />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "./views/Profile.vue";

export default Vue.extend({
  name: "App",

  components: {
    Profile
  },

  data: () => ({
    //
  })
});
</script>
