<template>
    <Header headerTitle="Loans" :count="countloans" icon="book" @search="search" @sortByName="sortByName"></Header>
    <div class="divider"></div>
    <div v-if="showDetails">
        <LoanDetails :loan="selectedLoan" @close="showTable"></LoanDetails>
    </div>
    <div v-if="!showDetails">
        <table class="highlight">
            <thead>
                <tr>
                    <th>LOAN ID</th>
                    <th>CLIENT NAME</th>
                    <th>TYPE</th>
                    <th>PURPOSE</th>
                    <th>AMOUNT</th>
                    <th>APPLICATION DATE</th>
                    <th>DURATION</th>
                    <th>STATUS</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="loan in filteredLoans" @click="setActive(loan)">
                    <LoanRow :loan="loan" showDetails="true"></LoanRow>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Header from '/src/components/Header.vue'
import LoanRow from '/src/components/LoanRow.vue'
import LoanDetails from '/src/components/LoanDetails.vue'
import LoanDataService from "/src/services/LoanDataService";

export default {
    components: {
        Header,
        LoanRow,
        LoanDetails
    },
    data() {
        return {
            loans: [],
            filteredLoans: [],
            selectedLoan: {},
            showDetails: false,
        }
    },

    methods: {
        setActive(loan) {
            this.selectedLoan = loan;
            this.showDetails = true;
            // console.log(client);
        },
        search(searchText) {
            console.log(searchText)
            this.filteredLoans = this.loans.filter(l => {
                return l.loan_id.toString().includes(searchText) ||
                    l.client_name.toLowerCase().includes(searchText.toLowerCase());
            })
            if (searchText == "") {
                this.filteredLoans = this.loans;
            }
        },
        sortByName(counter) {
            if (counter == 0) {
                this.filteredLoans = this.loans;
            } else if (counter == 1) {
                this.filteredLoans = this.filteredLoans.sort((a, b) => {
                    return a.loan_status.localeCompare(b.loan_status);
                })
            } else if (counter == 2) {
                this.filteredLoans = this.filteredLoans.sort((a, b) => {
                    return b.loan_status.localeCompare(a.loan_status);
                })
            }
        },
        showTable() {
            this.showDetails = false;
        },
        getloans() {
            LoanDataService.getAll().then(response => {
                this.loans = response.data;
                this.filteredLoans = this.loans;
            })
                .catch(e => {
                    console.log(e);
                })
        },
    },
    computed: {
        countloans() {
            return this.loans.length;
        },
    },
    mounted() {
        this.getloans();
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