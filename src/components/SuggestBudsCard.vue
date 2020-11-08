<template>
  <v-card height="268px" class="homeCard">
    <v-app-bar flat>
      <v-toolbar-title>Suggested Friends</v-toolbar-title>
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
export default class SuggestBudsCard extends Vue {
  buds: string[] = [
    "Tony",
    "Josh",
    "Deion",
    "Karan",
    "John",
    "Jane",
    "Joe",
    "Bob",
    "Bri"
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