<template>
  <v-app id="inspire">
    <v-app-bar app color="blue" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs left class="ml-n9" color="white">
        <v-tab disabled v="title">Studs</v-tab>
      </v-tabs>

      <v-tabs centered class="ml-n9" color="white">
        <v-tab v-for="(link, index) in links" :key="index" :to="link.path">{{
          link.name
        }}</v-tab>
      </v-tabs>

      <v-tabs right class="ml-n9" color="white">
        <v-tab v="profile" to="/profile">{{ profile.firstName }}</v-tab>
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
            <v-sheet
              rounded="lg"
              min-height="268"
              v-if="this.$route.path !== '/profile'"
            >
              <SuggestBudsCard />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet
              rounded="lg"
              min-height="268"
              v-if="this.$route.path !== '/profile'"
            >
              <RecentFeedCard />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { namespace } from "vuex-class";
import { ProfileData } from "@/interfaces/ProfileData.ts";
import SuggestBudsCard from "@/components/SuggestBudsCard.vue";
import RecentFeedCard from "@/components/RecentFeedCard.vue";

const profile = namespace("Profile");
@Component({
  components: {
    SuggestBudsCard,
    RecentFeedCard
  }
})
export default class App extends Vue {
  id = 1
  links: any[] = [
    {
      name: "Create Post",
      path: "/post"
    },
    {
      name: "Home",
      path: "/home"
    }
  ];
  
   @profile.Action updateProfileData!: (
    updateProfileData: ProfileData[]
  ) => void;

  @profile.State(state => state.profileData[0])
    public profile!: ProfileData;

  created() {
     axios
      .get(`http://localhost:3030/get/profileById/${this.id}`)
      .then(response => {
        this.updateProfileData(response.data);
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }
  };


</script>
