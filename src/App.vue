<script setup>
import { onMounted } from "vue";
import sideNav from "./components/sideNav.vue";
import M from "materialize-css";
onMounted(() => {
  M.AutoInit();
});
</script>

<template>
  <main class= "main">
    <sideNav class="left-panel"></sideNav>
    <div class="righ-panel">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
.main {
  display: flex;
}
.left-panel{
  width: 310px;
}

@media only screen and (max-width: 992px) {
  .left-panel{
    width: auto;
  }
}
</style>
