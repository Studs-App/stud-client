<template>
  <div>
    <v-row>
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
    </v-row>
  </div>
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
        center: "Brooklyn+Bridge,New+York,NY",
        format: "gif",
        language: "en",
      },

      markers: [
        {
          label: "B",
          color: "blue",
          lat: 40.702147,
          lng: -74.015794,
          size: "normal",
        },
        {
          label: "Y",
          color: "yellow",
          lat: 40.711614,
          lng: -74.012318,
          size: "tiny",
        },
        {
          label: "G",
          color: "green",
          lat: 40.718217,
          lng: -74.015794,
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
            { startLat: 40.737102, endLng: -73.990318 },
            { startLat: 40.749825, endLng: -73.987963 },
            { startLat: 40.752946, endLng: -73.987384 },
            { startLat: 40.762946, endLng: -73.997399 },
          ],
        },
      ],
      type: "roadmap",
      size: [800, 400],
    };
  },
});
</script>
