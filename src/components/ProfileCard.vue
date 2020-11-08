<template>
  <v-container class="spacing-playground pa-6" fluid>
    <v-card
      class="mx-auto"
      max-width="1200"
      outlined
      height="200"
      elevation="2"
    >
      <v-container>
        <v-row no-gutters align="center" justify="start">
          <v-col cols="12" sm="4">
            <v-card class="pa-2" elevation="0">
              <h3>{{ profile.first_name }} {{ profile.last_name }}</h3>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" align="center" justify="center">
            <v-avatar size="55">
              <img :src="profile.picture_url" />
            </v-avatar>
          </v-col>
          <v-col cols="12" sm="4" align="start" justify="end">
            <v-card class="pa-2" elevation="0">
              <strong>Studies:</strong>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container align="end" justify="end">
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" elevation="0">
              Studying {{ profile.major }} Class of 2020 at {{ profile.school }}
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" align="center" justify="center">
            <v-card class="pa-2 " elevation="0">
              Buds: {{ profile.budsCount }}
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" align="start" justify="end">
            <v-card class="pa-2" elevation="0">
              <v-btn
                color="primary"
                class="pa-1 ma-1"
                v-for="stud in profile.studs"
                :key="stud"
              >
                {{ stud }}
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

import { namespace } from "vuex-class";
import { ProfileData } from "@/interfaces/ProfileData.ts";

const profile = namespace("Profile");

@Component
export default class ProfileCard extends Vue {
  @profile.State(state => state.profileData)
  public profile!: ProfileData;

  beforeMount() {
    console.log("mount: ", this.profile);
  }
}
</script>

<style></style>
