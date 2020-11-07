<template>
  <div>
    <StudySessionTable parent="Scandanavia" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StudySessionTable from "@/components/StudySessionTable.vue"; // @ is an alias to /src

@Component({
  components: {
    StudySessionTable
  }
})
export default class Profile extends Vue {}
</script>
