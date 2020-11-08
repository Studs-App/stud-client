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
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" elevation="0">
              {{ profile.firstName }}
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" elevation="0">
              One of three columns
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" elevation="0">
              One of three columns
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" elevation="0">
              One of three columns
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2 " elevation="0">
              One of three columns
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" elevation="0">
              One of three columns
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- <v-container>
        <v-row>
          <v-col align-self="start" class="pa-2">
            One of three columns
          </v-col>
        </v-row>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="d-flex justify-center"
        ></v-list-item-avatar>

        <v-row>
          <v-col align-self="end" class="pa-2">
            One of three columns
          </v-col>
        </v-row>
      </v-container> -->
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1, spacing-playground pa-6">
            Headline 5
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="d-flex justify-center mb-6"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-list-item-subtitle class="spacing-playground pa-6"
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-card-actions> -->
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { namespace } from "vuex-class";
import { ProfileData } from "@/interfaces/ProfileData.ts";

const profile = namespace("Profile");

@Component
export default class ProfileCard extends Vue {
  public profile: ProfileData = {
    profileId: "",
    firstName: "",
    lastName: "",
    authenticatorId: "",
    major: "",
    school: "",
    studsCount: "",
    pictureUrl: "",
    studyTags: [""]
  };

  @profile.State(state => state.profileData[0])
  public profileData!: ProfileData;

  mounted() {
    this.profile = this.profileData;
    console.log("Profile Component", this.profile);
  }
}
</script>

<style>
</style>