<script setup>
import { onMounted } from 'vue';
import sideNav from './components/sideNav.vue'
import M from 'materialize-css'
// import TheWelcome from './components/TheWelcome.vue'

onMounted(()=>{
  M.AutoInit()
})
</script>

<template>
  
   <sideNav></sideNav>
   <!-- <dashbaord/> -->
   <!-- <clients/> -->
   <!-- <loans/> -->
</template>


