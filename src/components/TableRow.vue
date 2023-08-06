<template>
    <td>{{ client.client_id }}</td>
    <td>{{ client.name }}</td>
    <td>{{ client.gender }}</td>
    <td>{{ client.birthday }}</td>
    <td>{{ client.contact }}</td>
    <td>{{ loans }}</td>
    <td>{{ client.credit_score }}</td>
    <td><i class="material-icons">more_horiz</i></td>
</template>

<script>
import LoanDataService from "/src/services/LoanDataService";

export default {
    props: ['client'],
    methods: {
        countLoans() {
            LoanDataService.getLoans(this.client.client_id)
                .then(res => {
                    console.log(res.data.count)
                    this.loans = res.data.count;
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    watch: {
        loans(newval, oldval) {
            this.loans = newval
        }
    },
    data() {
        return {
            loans: 0
        }
    },
    mounted() {
        this.countLoans();
    }

}
</script>

<style>
td {
    font-size: 0.8rem;
}

</style>