<template>
  <v-main class="grey lighten-3" dark>
    <v-container>
      <v-row>
        <v-tabs>
          <v-tab v-for="(option, index) in options" :key="index" :to="option.path">{{ option.name }}</v-tab>
        </v-tabs>
      </v-row>
      <v-row>
        <router-view></router-view>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export interface RouteName{
  name: string;
  path: string;
}

@Component
export default class Home extends Vue {

  options: RouteName[] = [
    {
      name: "Map",
      path: "/home"
    },
    {
      name: "List",
      path: "/list"
    }
  ];
}
</script>

<style></style>
