<template>
  <v-container>
    <form @submit.prevent="submit">
      <h3>New Post</h3>
      <v-text-field
        v-model="studySessionName"
        :counter="30"
        label="Name your Study Session"
        required
      ></v-text-field>
      <v-text-field
        v-model="studySessionDescription"
        :counter="200"
        label="Study Session Description"
        required
      ></v-text-field>
      <v-select
        v-model="select"
        :items="subjects"
        label="Select Subject"
        data-vv-name="select"
        required
      ></v-select>

      <v-col cols="5">
        <v-subheader class="pl-0">Preferred Distance</v-subheader>
        <v-slider v-model="slider" :thumb-size="24" thumb-label="sometimes"></v-slider>
      </v-col>

      <v-text-field v-model="email" :error-messages="errors" label="Invite Studs" required></v-text-field>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Schedule Session"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>

        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <v-checkbox
        v-model="checkbox"
        :error-messages="errors"
        value="1"
        label="Private?"
        type="checkbox"
        required
      ></v-checkbox>

      <v-btn class="mr-4" type="submit" :disabled="invalid">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Post extends Vue {
  description = "";
  studySessionName = "";
  studySessionDescription = "";
  emails = [""];
  select = null;
  subjects = [
    "Calculus",
    "Gender Women Studies",
    "History",
    "Chemistry",
    "Physics"
  ];
  checkbox = null;

  submit() {
    //this.$refs.observer.validate()
  }
  clear() {
    this.description = "";
    this.emails = [""];
    this.select = null;
    this.checkbox = null;
    this.$data.reset();
  }
}
</script>