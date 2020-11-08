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
  studySessionData: StudySessionData[] = [
    {
      title: "Physics",
      location: "Northridge",
      status: "In-Progress",
      buds: ["Josh", "Deion", "Karan"],
      duration: "2 Hours",
      studyDate: "2020-11-07"
    },
    {
      title: "Calculus",
      location: "New York City",
      status: "Done",
      buds: ["John", "Doe"],
      duration: "6 Hours",
      studyDate: "2020-10-22"
    },
    {
      title: "Physics",
      location: "Dallas",
      status: "Canceled",
      buds: ["David", "Tony"],
      duration: "0 Minutes",
      studyDate: "2020-09-30"
    },
    {
      title: "Stats",
      location: "Seattle",
      status: "Done",
      buds: ["Jane"],
      duration: "45 Minutes",
      studyDate: "2020-07-14"
    },
    {
      title: "English",
      location: "Miami",
      status: "Canceled",
      buds: [],
      duration: "0 Minutes",
      studyDate: "2019-12-02"
    },
    {
      title: "Music",
      location: "Boston",
      status: "Done",
      buds: ["Joe"],
      duration: "12 Hours",
      studyDate: "2019-09-30"
    }
  ];

  profileData: ProfileData[] = [
    {
      profileId: "1",
      firstName: "Tony",
      lastName: "Nguyen",
      authenticatorId: "2",
      major: "Computer Science",
      school: "CSUN",
      studsCount: "100",
      pictureUrl:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      studyTags: ["Computer Science", "English", "Science"]
    },
    {
      profileId: "1",
      firstName: "Tony",
      lastName: "Nguyen",
      authenticatorId: "2",
      major: "Computer Science",
      school: "CSUN",
      studsCount: "100",
      pictureUrl:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      studyTags: ["Computer Science", "English", "Science"]
    },
    {
      profileId: "1",
      firstName: "Tony",
      lastName: "Nguyen",
      authenticatorId: "2",
      major: "Computer Science",
      school: "CSUN",
      studsCount: "100",
      pictureUrl:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      studyTags: ["Computer Science", "English", "Science"]
    }
  ];

  @profile.Action updateProfileData!: (
    updateProfileData: ProfileData[]
  ) => void;

  @studySession.Action updateStudySessionData!: (
    updateStudySessionData: StudySessionData[]
  ) => void;

  beforeMount() {
    this.updateProfileData(this.profileData);
    this.updateStudySessionData(this.studySessionData);
  }
}
</script>
