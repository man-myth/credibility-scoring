<template>
    <div class="card">
        <div class="card-content">
            <span class="card-title">{{ cardHeading }}</span>
            <p>{{ cardContent }}</p>
        </div>
    </div>
</template>

<script>
export default{
    props:['cardHeading', 'cardContent']
}
</script>