<template>
    <div class="col s12 m4 l4">
        <div class="card">
            <div class="card-content">
            <span class="card-title">{{ cardHeading }}</span>
            <p>{{ cardContent }}</p>
        </div>
        </div>
        
    </div>
</template>

<script>
export default{
    props:['cardHeading', 'cardContent']
}
</script>
<style scoped>
.card {border-radius: 40px;}
.card{
    height: 15vh;
}
</style>