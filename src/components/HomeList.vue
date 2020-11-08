<template>
  <v-container>
    <v-data-table
      :headers="tableHandlers"
      :items="studySessions"
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
import { Component, Vue } from "vue-property-decorator";
import { StudySessionData } from "@/interfaces/StudySessionData.ts";
import { namespace } from "vuex-class";
const studySession = namespace("StudySession");

@Component
export default class HomeList extends Vue {
  @studySession.State(state => state.studySessionData)
  studySessions!: StudySessionData[]

  private expanded: [] = [];
  private singleExpand: false | undefined;
  tableHandlers: any = [
    {
      text: "Study Session",
      align: "start",
      sortable: false,
      value: "title",
    },
    { text: "Location", value: "location" },
    { text: "Status", value: "status" },
    { text: "Buds", value: "buds" },
    { text: "Duration", value: "duration" },
    { text: "Date", value: "studyDate" },
    { text: "", value: "data-table-expand" },
  ];

  beforeMount() {
    console.log('mount: ', this.studySessions)
  }
}
</script>
