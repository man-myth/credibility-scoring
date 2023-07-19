<script setup>
import { onMounted } from "vue";
import M from "materialize-css";
import SideNav from "/src/components/SideNav.vue";
onMounted(() => {
  M.AutoInit();
});
</script>

<template>
  <main class= "row">
    <SideNav class="col s0 m0 l3"></SideNav>
    <div class="col s12 m12 l9">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
html{
  overflow-x: hidden;
}
/* @media only screen and (min-width: 1490px){
  .row .col.l3 {
    width: 20%;
  }
  .row .col.l9 {
    width: 80%;
  }
}
@media only screen and (min-width: 993px){
  .row .col.l3 {
    width: 30%;
  }
  .row .col.l9 {
    width: 70%;
  }
} */
@media only screen and (min-width: 1490px){
  .row .col.l3 {
    width: 20%;
  }
  .row .col.l9 {
    width: 80%;
  }
}
@media only screen and (min-width: 993px) and (max-width: 1489px){
  .row .col.l3 {
    width: 30%;
  }
  .row .col.l9 {
    width: 70%;
  }
}


</style>
