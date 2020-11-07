<template>
  <v-container>
    <v-data-table
      :headers="tableHandlers"
      :items="studySessions"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="title"
      :items-per-page="5"
      show-expand
      class="elevation-1"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.title }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { StudySession } from "@/interfaces/StudySession";

@Component
export default class StudySessionTable extends Vue {
  studySessions: StudySession[] = [
    {
      title: "Computer Science",
      location: "Northridge",
      status: "In-Progress",
      buds: "Josh, Deion, Karan",
      duration: "2 Hours",
      studyDate: "2020-11-07"
    },
    {
      title: "Calculus",
      location: "New York City",
      status: "Done",
      buds: "John, Doe",
      duration: "6 Hours",
      studyDate: "2020-10-22"
    },
    {
      title: "Physics",
      location: "Dallas",
      status: "Canceled",
      buds: "David, Tony",
      duration: "0 Minutes",
      studyDate: "2020-09-30"
    },
    {
      title: "Stats",
      location: "Seattle",
      status: "Done",
      buds: "Jane",
      duration: "45 Minutes",
      studyDate: "2020-07-14"
    },
    {
      title: "English",
      location: "Miami",
      status: "Canceled",
      buds: "None",
      duration: "0 Minutes",
      studyDate: "2019-12-02"
    },
    {
      title: "Music",
      location: "Boston",
      status: "Done",
      buds: "Joe",
      duration: "12 Hours",
      studyDate: "2019-09-30"
    }
  ];

  private expanded: [] = [];
  private singleExpand: false | undefined;
  tableHandlers: any = [
    {
      text: "Study Session",
      align: "start",
      sortable: false,
      value: "title"
    },
    { text: "Location", value: "location" },
    { text: "Status", value: "status" },
    { text: "Buds", value: "buds" },
    { text: "Duration", value: "duration" },
    { text: "Date", value: "studyDate" },
    { text: "", value: "data-table-expand" }
  ];
}
</script>
