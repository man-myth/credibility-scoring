<script setup>
import { onMounted } from "vue";
import M from "materialize-css";
import SideNav from "/src/components/SideNav.vue";
import ClientDataService from "/src/services/ClientDataService";


onMounted(() => {
  M.AutoInit();
  ClientDataService.getAll().then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        })
});
</script>

<template>
  <div class= "row">
    <SideNav class="col s12 m1 l3"></SideNav>
    <div class="col s12 m12 l9">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
html{
  margin: 0;
  overflow-x: hidden;
  background-color: #E8E8E8;
  box-sizing: border-box;
}
.row{
  margin-bottom: 0px;
}
.card {border-radius: 40px;}
.router-link-active.router-link-exact-active{
    background-color: #E8E8E8;
    color: black;
}
.router-link-active.router-link-exact-active i.material-icons{
    color: black;
}
</style>
