<template>
    <v-row align="center">
        <v-col align="center">
            <static-map
            :google-api-key="dataValues.apiKey"
            :format="dataValues.format"
            :markers="dataValues.markers"
            :zoom="dataValues.zoom"
            :center="dataValues.center"
            :size="dataValues.size"
            :type="dataValues.type"
            :paths="dataValues.paths"
            :language="dataValues.language"
            ></static-map>
        </v-col>
    </v-row>
</template>

<script>
import Vue from "vue";
import StaticMap from "vue-static-map";

export default Vue.extend({
  name: "HomeApp",
  components: {
    StaticMap,
  },
  data() {
    return {
      dataValues: {
        apiKey: "AIzaSyD75yziFepXfsT_zyNAuaAPSxUNVLlYK-w", 
        zoom: 13, 
        center: "Northridge,CA",
        format: "gif",
        language: "en",
      },

      markers: [
        {
          label: "B",
          color: "blue",
          lat: 34.24167,
          lng: -118.52833,
          size: "normal",
        },
        {
          label: "Y",
          color: "yellow",
          lat: 34.24167,
          lng: -118.52833,
          size: "tiny",
        },
        {
          label: "G",
          color: "green",
          lat: 34.24167,
          lng: -118.52833,
          size: "small",
          icon: "http://www.airsoftmap.net/images/pin_map.png",
        },
      ],
      paths: [
        {
          color: "blue",
          weight: 8,
          geodesic: false,
          fillcolor: "0xFFFF0033",
          locations: [
            { startLat: 34.24167, endLng: -118.52833 },
            { startLat: 34.29029, endLng: 118.59788},
            { startLat: 34.34029, endLng: -118.65788 },
            { startLat: 34.39029, endLng: 118.82788},
          ],
        },
      ],
      type: "roadmap",
      size: [800, 400],
    };
  },
});
</script>
