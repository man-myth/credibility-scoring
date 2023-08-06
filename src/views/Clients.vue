<template>
    <Header headerTitle="Clients" :count="countClients" icon="people"></Header>
    <div class="divider"></div>
    <div >
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
                <tr v-for="client in clients">
                    <TableRow :client="client" icon="more_horiz"></TableRow>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import Header from '/src/components/Header.vue'
import TableRow from '/src/components/TableRow.vue'
import ClientDataService from "/src/services/ClientDataService";

export default {
    components: {
        Header,
        TableRow
    },
    data() {
        return {
            clients: [],
        }
    },

    methods: {
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

    }
}
</script>

<style>
.divider {
    background-color: black;
}

</style>