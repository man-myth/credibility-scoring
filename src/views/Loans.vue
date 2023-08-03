<template>
        <Header headerTitle="Loans" :count="countClients" icon="book"></Header>
        <div class="row table">
            <div class="col s1">
                <h6>LOAN ID</h6>
            </div>
            <div class="col s3">
                <h6>NAME</h6>
            </div>
            <div class="col s1">
                <h6>PURPOSE</h6>
            </div>
            <div class="col s2">
                <h6>AMOUNT</h6>
            </div>
            <div class="col s1">
                <h6>DURATION</h6>
            </div>
            <div class="col s2">
                <h6>STATUS</h6>
            </div>
            <div class="col s1">
                <h6>CREDIT SCORE</h6>
            </div>
            <div class="col s1">
                <h6></h6>
            </div>
        </div>
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