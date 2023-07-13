<template>
    <div class="col s3">
        <ul id="slide-out" class="sidenav sidenav-fixed">

            <li></li>
            <li><a href="#!"><i class="material-icons">dashboard</i>Dashboard</a></li>
            <li><a href="#!"><i class="material-icons">person</i>Clients</a></li>
            <li><a href="#!"><i class="material-icons">description</i>Loans</a></li>
            <li><div class="divider"></div></li>
            <li><a href="#!"><i class="material-icons">notifications</i>Notifications</a></li>
            <li><a href="#!"><i class="material-icons">settings</i>Settings</a></li>
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
