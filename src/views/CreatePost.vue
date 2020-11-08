<template>
  <v-container>
    <form @submit.prevent="submit">
      <h3>New Post</h3>
      <v-text-field
        v-model="newStudySession.title"
        :counter="30"
        label="Name your Study Session"
        required
      ></v-text-field>
      <v-text-field
        v-model="newStudySession.description"
        :counter="200"
        label="Study Session Description"
        required
      ></v-text-field>
      <v-select
        v-model="newStudySession.subject"
        :items="subjects"
        label="Select Subject"
        data-vv-name="select"
        required
      ></v-select>

      <v-col cols="5">
        <v-subheader class="pl-0">Preferred Distance</v-subheader>
        <v-slider v-model="sliderDistance" :value="sliderDistance" :thumb-size="24" :thumb-label="true"></v-slider>
      </v-col>

      <v-text-field v-model="buds" :error-messages="errors" label="Invite Studs"></v-text-field>

      <v-row justify="center">
        <v-date-picker v-model="scheduledDate"></v-date-picker>
      </v-row>

      <v-checkbox
        v-model="newStudySession.is_private"
        :error-messages="errors"
        value="1"
        label="Private?"
        type="checkbox"
      ></v-checkbox>

      <v-btn class="mr-4" type="submit">submit</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { StudySessionData, NewStudySessionData } from '../interfaces/StudySessionData';

@Component
export default class Post extends Vue {
  newStudySession = {
    title: "",
    description: "",
    subject: "",
	  status:"In Progress",
    lattitude: 0,
    longitude: 0,
    location: "",
    duration: "",
    buds: [""],
    scheduledDate: "",
    isPrivate: false,
    profileId: 0
  }
  buds = "";
  sliderDistance = 20;
  scheduledDate = new Date().toISOString().substr(0, 10)
  errors = 'Invalid data'
  description = "";
  select = null;
  subjects = [
      "Math",
      "Gender Women Studies",
      "History",
      "Chemistry",
      "Physics",
      "Computer Science",
      "Geology",
      "Biology"
    ];

  submitStudySession(studySessionData: NewStudySessionData){
    axios.post('http://localhost:3030/create/studySession/', studySessionData)
      .then(response=>{
        console.log(response)
    }).catch(error=>{
      console.log('ERROR: ', error)
    })
  }

  convertStringToArr(value: string): string[]{
    return value.split(" ").map(String);
  }

  submit() {
    this.newStudySession.scheduledDate = this.scheduledDate
    this.newStudySession.location = this.sliderDistance + ' mi.';
    this.newStudySession.buds = this.convertStringToArr(this.buds);
    this.submitStudySession(this.newStudySession)
    this.clear();
    
  }
  clear() {
    this.newStudySession.title = "";
    this.newStudySession.description = "";
    this.newStudySession.buds = [""];
    this.newStudySession.location = '';
    this.sliderDistance = 20;
    this.newStudySession.subject = "";
    this.buds = "";
    this.newStudySession.isPrivate = false;
    this.$data.reset();
  }
}
</script>
