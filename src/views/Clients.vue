<template>
    <Header headerTitle="Clients" :count="countClients" icon="people"></Header>
    <div class="divider"></div>
    <div :class=containerClass>
        <div class="row table">
            <div class="col s1">
                <h6>CLIENT ID</h6>
            </div>
            <div class="col s3">
                <h6>NAME</h6>
            </div>
            <div class="col s1">
                <h6>GENDER</h6>
            </div>
            <div class="col s2">
                <h6>BIRTHDAY</h6>
            </div>
            <div class="col s1">
                <h6>CONTACT</h6>
            </div>
            <div class="col s2">
                <h6>LOANS</h6>
            </div>
            <div class="col s1">
                <h6>CREDIT SCORE</h6>
            </div>
            <div class="col s1">
                <h6></h6>
            </div>
        </div>
        <div v-for="client in clients" class="card">
            <div class="row table">
                <div class="col 1">
                    <h6 class="row-content">{{client.client_id}}</h6>
                </div>
                <div class="col s3">
                    <h6>{{client.name}}</h6>
                </div>
                <div class="col s1">
                    <h6>{{ client.gender }}</h6>
                </div>
                <div class="col s2">
                    <h6>{{client.birthday}}</h6>
                </div>
                <div class="col s1">
                    <h6>{{client.contact}}</h6>   
                </div>
                <div class="col s2">
                    <h6>{{ countLoans(client.client_id) }}</h6>
                </div>
                <div class="col s1">
                    <h6>{{ client.credit_score }}</h6>
                </div>
                <div class="col s1">
                    <h6></h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '/src/components/Header.vue'
import ClientDataService from "/src/services/ClientDataService";

export default {
    components: {
        Header
    },
    data() {
        return {
            clients: [],
            loans: [],
            containerClass: 'container-lg',
        }
    },
    methods: {
        getClients() {
            ClientDataService.getAll().then(response => {
                this.clients = response.data;
                console.log(response.data);
            })
                .catch(e => {
                    console.log(e);
                })
        },
        countLoans(id){
            console.log("counting loans of " + id)
        }
       
    },
    computed: {
        countClients() {
            return this.clients.length;
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
        this.getClients();
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

h6 {
    font-size: 0.8rem;
}

.row.table {
    padding-left: 5px;
    padding-right: 5px;
}

.row.table .col {
    display: flex;
    justify-content: center;
}

.row-content {
    font-size: 1rem;
    font-weight: bold;
}
</style>