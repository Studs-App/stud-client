<template>
  <div>
    <p>{{ user.name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UserData, UserStudyData } from "@/interfaces/User";

@Component
export default class User extends Vue {}
</script>

<style></style>
