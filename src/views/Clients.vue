<template>
    <Header headerTitle="Clients" :count="countClients" icon="people" @search="search" @sortByName="sortByName"></Header>
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
                <tr class="modal-trigger" v-for="client in filteredClients" @click="setClient(client)">
                    <ClientRow :client="client"></ClientRow>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Header from '/src/components/Header.vue'
import ClientRow from '/src/components/ClientRow.vue'
import ClientDetails from '/src/components/ClientDetails.vue'
import ClientDataService from "/src/services/ClientDataService";

export default {
    components: {
        Header,
        ClientRow,
        ClientDetails
    },
    data() {
        return {
            clients: [],
            filteredClients: [],
            selectedClient: {},
            showDetails: false,
        }
    },

    methods: {
        setClient(client) {
            this.selectedClient = client;
            this.showDetails = true;
            // console.log(client);
        },
        search(searchText) {
            this.filteredClients = this.clients.filter(c => {
                return c.client_id.toString().includes(searchText) ||
                    c.name.toLowerCase().includes(searchText.toLowerCase());
            })
            if (searchText == "") {
                this.filteredClients = this.clients;
            }
        },
        sortByName(counter) {
            if (counter == 0) {
                this.filteredClients = this.clients;
            } else if (counter == 1) {
                this.filteredClients = this.filteredClients.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            } else if (counter == 2) {
                this.filteredClients = this.filteredClients.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            }
        },
        showTable() {
            this.showDetails = false;
        },
        getClients() {
            ClientDataService.getAll().then(response => {
                this.clients = response.data;
                this.filteredClients = this.clients;
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

.details-panel {
    display: flex;
    justify-content: center;
}
</style>