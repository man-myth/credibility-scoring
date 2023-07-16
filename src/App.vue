<script setup>
import { onMounted } from "vue";
import sideNav from "./components/sideNav.vue";
import M from "materialize-css";
onMounted(() => {
  M.AutoInit();
});
</script>

<template>
  <sideNav></sideNav>
  <div>
    <router-view></router-view>
  </div>
</template>
