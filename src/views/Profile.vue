<template>
  <div>
    <ProfileCard />
    <StudySessionTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StudySessionTable from "@/components/StudySessionTable.vue";
import ProfileCard from "@/components/ProfileCard.vue"; // @ is an alias to /src
import axios from "axios";

import { namespace } from "vuex-class";
import { ProfileData } from "@/interfaces/ProfileData";
import { StudySessionData } from "@/interfaces/StudySessionData";

const profile = namespace("Profile");
const studySession = namespace("StudySession");

@Component({
  components: {
    ProfileCard,
    StudySessionTable
  }
})
export default class Profile extends Vue {
  id = 9;

  @profile.Action updateProfileData!: (
    updateProfileData: ProfileData[]
  ) => void;

  @studySession.Action updateStudySessionData!: (
    updateStudySessionData: StudySessionData[]
  ) => void;

  created() {
    axios
      .get(`http://localhost:3030/get/profileById/${this.id}`)
      .then(response => {
        this.updateProfileData(response.data);
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });

    axios
      .get("http://localhost:3030/get/studySession/all")
      .then(response => {
        this.updateStudySessionData(response.data);
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }
}
</script>
