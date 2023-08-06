<template>
    <Header headerTitle="Clients" :count="countClients" icon="people"></Header>
    <div class="divider"></div>
    <div v-if="showDetails">
        <ClientDetails :client="selectedClient" @close="showTable"></ClientDetails>
    </div>
    <div v-if="!showDetails">
        <table class="highlight">
            <thead>
                <tr>
                    <th>CLIENT ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>BIRTHDAY</th>
                    <th>CONTACT</th>
                    <th>LOANS</th>
                    <th>CREDIT SCORE</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr class="modal-trigger" v-for="client in clients" @click="setClient(client)">
                    <TableRow :client="client"></TableRow>
                </tr>
            </tbody>
        </table>
    </div>
  
</template>

<script>
import Header from '/src/components/Header.vue'
import TableRow from '/src/components/TableRow.vue'
import ClientDetails from '/src/components/ClientDetails.vue'
import ClientDataService from "/src/services/ClientDataService";

export default {
    components: {
        Header,
        TableRow,
        ClientDetails
    },
    data() {
        return {
            clients: [],
            selectedClient:{},
            showDetails: false,
        }
    },

    methods: {
        setClient(client){
            this.selectedClient = client;
            this.showDetails = true;
            console.log(client);
          
        },
        showTable(){
            this.showDetails = false;
        },  
        getClients() {
            ClientDataService.getAll().then(response => {
                this.clients = response.data;
            })
                .catch(e => {
                    console.log(e);
                })
        },
    },
    computed: {
        countClients() {
            return this.clients.length;
        },
    },
    mounted() {
        this.getClients();
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);

    }
}
</script>

<style >
.divider {
    background-color: black;
}
.details-panel{
    display: flex;
    justify-content: center;
}
</style>