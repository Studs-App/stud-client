<template>
  <v-card height="268px">
    <v-toolbar card>
      <v-toolbar-title>Suggested Friends</v-toolbar-title>
    </v-toolbar>

    <v-card-text flex-grow-1 over class="overflow-false">
      <v-list allow-overflow="false">
        <template v-for="bud in buds">
          <v-list-tile :key="bud">
            <v-list-tile-content>
              <strong
                ><div class=" my-5">
                  {{ bud }}
                </div></strong
              >
              <v-divider></v-divider>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
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
.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>
