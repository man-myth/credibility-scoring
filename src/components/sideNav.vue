<template>
    <div class="">
        <ul id="slide-out" class="sidenav sidenav-fixed">
            <li>
                <div class="profile">
                    <div class="profile-avatar">
                        <ProfileAvatar image="src/assets/images/profile-pic.jpeg" customSize="150px"></ProfileAvatar>
                    </div>
                    <div class="flow-text center-align">Juan Dela Cruz</div>
                </div>
            </li >
            <li></li>
            <li><router-link to="/"><i class="material-icons">dashboard</i>Dashboard</router-link></li>
            <li><router-link to="/clients"><i class="material-icons">person</i>Clients</router-link></li>
            <li><router-link to="/loans"><i class="material-icons">description</i>Loans</router-link></li>
            <li></li>
            <li><router-link to=""><i class="material-icons">notifications</i>Notifications</router-link></li>
            <li><router-link to=""><i class="material-icons">settings</i>Settings</router-link></li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
</template>

<script>
import ProfileAvatar from 'vue-profile-avatar'
export default {
  components: {
    ProfileAvatar
  },
}
</script>



<style>
.sidenav{
    color: white;
}
.sidenav li>a {
    color: white;
    /* display: flex;
    justify-content: center; */
    margin-left: 2.4rem;
    /* pading-left: 2.4rem; */

}
.sidenav li>a>i.material-icons {
    color: white;
}
#slide-out {
    background-color: #E9B81E;
}
.profile{
    margin-top: 3rem;
    height: 15rem;
}
.profile-avatar{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>