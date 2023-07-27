<template>
    <div class="container">
        <h3>Notifications </h3>
        <ul>
        <li v-for="(notification, index) in notifications" :key="index">
            <div class="card-panel">
                <span class="">{{ notification }} <i class="material-icons right">close </i></span>
            </div>
        </li>
    </ul>
    </div>
    
</template>
  
<script>
export default {
    data() {
        return {
            notifications: [
                'Notification 1',
                'Notification 2',
                'Notification 3'
            ]
        }
    }
}
</script>
  
<style scoped>
ul{
    margin-top: 2rem;
    width: 90%;
}

.card-panel{
    border-radius: 48px;
}
</style>
  