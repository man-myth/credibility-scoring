<template>
        <Header headerTitle="Loans" :count="countClients" icon="book"></Header>
</template>

<script>
import Header from '/src/components/Header.vue'
export default{
    components:{
        Header
    },
    data(){
        return{
            clients: 210,
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
}
</script>