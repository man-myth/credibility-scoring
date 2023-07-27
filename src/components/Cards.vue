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
export default {
    props: ['cardHeading', 'cardContent']
}
</script>
<style scoped >
.card {
    height: 10vh;
}
p{
    font-size: 1.3rem;
    font-weight: bold;
}
.card-content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    }
</style>