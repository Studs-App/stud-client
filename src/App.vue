<template>
  <v-app id="inspire">
    <v-app-bar app color="blue" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs left class="ml-n9" color="white">
        <v-tab disabled v="title">
          Studs
        </v-tab>
      </v-tabs>

      <v-tabs centered class="ml-n9" color="white">
        <v-tab v-for="(link, index) in links" :key="index" :to="link.path">
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-tabs right class="ml-n9" color="white">
        <v-tab v="profile" :to="profile.path">
          {{ profile.name }}
        </v-tab>
      </v-tabs>
      <v-avatar
        class="hidden-sm-and-down"
        color="grey shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3" dark>
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268"> </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg"> <router-view /> </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268"> </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    links: [
      {
        name: "Create Post",
        path: "/post"
      },
      {
        name: "Home",
        path: "/home"
      }
    ],
    profile: {
      name: "Deion",
      path: "/profile"
    }
  })
});
</script>
