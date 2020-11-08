<template>
  <v-container class="spacing-playground pa-6" fluid>
    <v-data-table
      :headers="tableHandlers"
      :items="studySessions"
      :expanded.sync="expanded"
      item-key="title"
      :items-per-page="5"
      show-expand
      class="elevation-2"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.title }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { StudySessionData } from "@/interfaces/StudySessionData.ts";

const studySession = namespace("StudySession");

@Component
export default class StudySessionTable extends Vue {
  private expanded: [] = [];
  private singleExpand: false | undefined;

  public studySessions: StudySessionData[] = [];

  @studySession.State(state => state.studySessionData)
  public studySessionData!: StudySessionData[];

  mounted() {
    this.studySessions = this.studySessionData;
  }

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
