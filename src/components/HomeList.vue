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
        <td :colspan="headers.length">
          <v-container tra>
            <Home-Map />
          </v-container>

          <v-row no-gutters align="center" justify="start">
            <v-col cols="12" sm="4">
              <v-card class="pa-2" elevation="0">
                <strong
                  ><h3>Studied for {{ item.title }}</h3>
                </strong>
              </v-card>
            </v-col>

            <v-col cols="12" sm="4" align="center" justify="center">
              <v-avatar size="55"> </v-avatar>
            </v-col>

            <v-col cols="12" sm="4" align="start" justify="end">
              <v-card class="pa-2" elevation="0">
                <strong>
                  <p>{{ item.scheduledDate }}</p>
                </strong></v-card
              >
            </v-col>
            <v-btn x-small class="pa-2" color="primary">
              {{ item.subject }}
            </v-btn>
          </v-row>

          <h4 class="inline-text">Members:</h4>
          <p class="inline-text" v-for="bud in item.buds" v-bind:key="bud">
            {{ bud }}
          </p>
          <br />

          <h4 class="inline-text">Duration:</h4>
          <p class="inline-text">10</p>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { StudySessionData } from "@/interfaces/StudySessionData.ts";
import HomeMap from "@/components/HomeMap.vue";
import { namespace } from "vuex-class";
const studySession = namespace("StudySession");

@Component({
  components: {
    HomeMap
  }
})
export default class HomeList extends Vue {
  @studySession.State(state => state.studySessionData)
  studySessions!: StudySessionData[];

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

<style>
.inline-text {
  display: inline;
}
</style>