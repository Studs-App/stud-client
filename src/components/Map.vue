<template>
   <v-row>
        <v-tabs centered>
            <v-tab v-for="(option, index) in options" :key="index" :to=option.path>
                {{option.name}}
            </v-tab>
        </v-tabs>
   </v-row>
    
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

    data: () => ({
    options: [
      {
        name: "",
        path: ""
      },
      {
        name: "Map",
        path: "/map"
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
