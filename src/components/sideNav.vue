<template>
    <div class="">
        <ul id="slide-out" class="sidenav sidenav-fixed">
            <li>
                <div class="card">
                    <div class="card-image">
                        <img src="public/images/profile-pic.jpg" class="circle">
                    </div>
                    <div class="card-title center-align">Juan Dela Cruz</div>
                </div>
            </li>
            <li></li>
            <li><router-link to="/"><i class="material-icons">dashboard</i>Dashboard</router-link></li>
            <li><router-link to="/clients"><i class="material-icons">person</i>Clients</router-link></li>
            <li><router-link to="/loans"><i class="material-icons">description</i>Loans</router-link></li>
            <li>
                <div class="divider"></div>
            </li>
            <li><router-link to=""><i class="material-icons">notifications</i>Notifications</router-link></li>
            <li><router-link to=""><i class="material-icons">settings</i>Settings</router-link></li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
    // onMounted(()=>{
    //     // var elems = document.querySelectorAll('.sidenav')
    //     // M.Sidenav.getInstance(elems)
    // })
</script>
<style>
#slide-out {
    background-color: #E9B81E;
}
</style>