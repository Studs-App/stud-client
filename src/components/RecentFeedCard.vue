<template>
  <v-card height="268px" width="200px" class="homeCard">
    <v-app-bar flat>
      <v-toolbar-title>Recent Activity</v-toolbar-title>
    </v-app-bar>

    <v-card-text flex-grow-1 over class="overflow-false homeCard_text">
      <v-list allow-overflow="false" v-for="bud in buds" v-bind:key="bud">
        <strong>
          <div class=" my-5">
            {{ bud }}
          </div>
        </strong>
        <v-divider></v-divider>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang=ts>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RecentFeedCard extends Vue {
  buds: string[] = [
    "Tony is studying Computer Science",
    "Josh is studying Math",
    "Deion is studying Science",
    "Karan is studying Art",
    "John is studying Physics",
    "Jane is studying CIT",
    "Joe is studying Engineering",
    "Bob is studying Korean",
    "Bri is studying Japanese"
  ];
}
</script>

<style>
.homeCard {
  display: flex !important;
  flex-direction: column;
}

.homeCard_text {
  flex-grow: 1;
  overflow: auto;
}
</style>