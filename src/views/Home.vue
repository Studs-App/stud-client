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
import { namespace } from "vuex-class";
const studySession = namespace("StudySession");

import axios from "axios";
import { StudySessionData } from '../interfaces/StudySessionData';
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


  @studySession.Action updateStudySessionData!: (
    updateStudySessionData: StudySessionData[]
  ) => void;


  created() {
    axios.get("http://localhost:3030/get/studySession/all")
      .then(response => {
        this.updateStudySessionData(response.data)
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })
  }
}


</script>

<style></style>
