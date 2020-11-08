<template>
  <v-container>
    <v-tabs >
        <v-tab v-for="(option, index) in options" :key="index" :to=option.path>
            {{option.name}}
        </v-tab>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

    data: () => ({
    options: [
      {
        name: "Map",
        path: "/home"
      },
      {
        name: "List",
        path: "/list"
      }
    ]
  })
});
</script>

<style></style>
