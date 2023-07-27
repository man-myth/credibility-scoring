<template>
    <Header headerTitle="Clients" :count="countClients" icon="people"></Header>
    <div class="divider"></div>
    <div :class=containerClass >
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
        <div class="card">
            <div class="row table">
                <div class="col 1"> 
                    <h6 class="row-content">10006</h6>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Header from '/src/components/Header.vue'
export default {
    components: {
        Header
    },
    data() {
        return {
            clients: 10,
            containerClass: 'container-lg',
        }
    },
    computed: {
        countClients() {
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
    mounted() {
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

.divider {
    background-color: black;
}
h6{
    font-size:0.8rem;
}
.row.table{
    padding-left: 5px;
    padding-right: 5px;
}
.row.table .col{
    display: flex;
    justify-content: center;
}
.row-content{
    font-size: 1rem;
    font-weight: bold;
}
</style>