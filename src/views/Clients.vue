<template>
    <Header headerTitle="Clients" :count="countClients" icon="people"></Header>
    <div ></div>
</template>

<script>
import Header from '/src/components/Header.vue'
export default{
    components:{
        Header
    },
    data(){
        return{
            clients: 10,
            containerClass: 'container-lg',
        }
    },
    computed:{
        countClients(){
            return this.clients
        },
        updateContainerClass() {
            if (window.innerWidth < 993) {
                this.containerClass = 'container'
            } else {
                this.containerClass = 'container-lg'
            }
        },
    },
    mounted(){
        window.addEventListener('resize', this.updateContainerClass);
    }
}
</script>

<style>
    .container-lg {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
}

</style>