<template>
  <v-card height="268px">
    <v-toolbar card>
      <v-toolbar-title>Recent Activity</v-toolbar-title>
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
.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>