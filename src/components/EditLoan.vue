<template>
    <!-- HEADER -->
    <div class="container">
        <div class="top-container">
            <router-link to='/loans' class="btn-floating btn-meduim waves-effect waves-light">
                <i class="material-icons">arrow_back</i>
            </router-link>
            <h4>Edit Loan</h4>
        </div>

        <!-- First Row -->
        <div class="divider top"></div>
        <div class="row">
            <div class="col s2">
                <b> Client ID:</b>
            </div>
            <div class="input-field col s10">
                <input disabled id="autocomplete-input" class="autocomplete" type="text" v-model="client_id" @change="setClientId">
            </div>
        </div>

        <div class="row">

        </div>

        <div class="row">
            <div class="col s2">
                <b> Purpose:</b>
            </div>
            <div class="input-field col s10">
                <input id="purpose" type="text" v-model="purpose">
            </div>
            <div class="col s1"></div>
            <div class="col s2">
                <b>Loan Type:</b>
            </div>

            <div class="input-field col s4">
                <select v-model="type" class="browser-default">
                    <option value="" disabled selected></option>
                    <option value="Personal">Personal</option>
                    <option value="Business">Business</option>
                    <option value="end-to-end">end-to-end</option>

                </select>
            </div>
        </div>
        <!-- Two column -->
        <div class="row">
            <div class="col s2">
                <b>Loan Amount:</b>
            </div>
            <div class="input-field col s3">
                <input id="amount" type="number" v-model="amount">
            </div>
            <div class="col s1"></div>
            <div class="col s2 ">
                <b>Duration:</b>
            </div>

            <div class="input-field col s4">
                <input id="duration" type="number" v-model="duration">
            </div>
        </div>

        <div class="row">
            <div class="col s2">
                <b>Guarantors:</b>
            </div>
            <div class="input-field col s3">
                <input id="guarantors" type="number" v-model="guarantors">
            </div>
            <div class="col s1"></div>
            <div class="col s2">
                <b>Co-applicant:</b>
            </div>

            <div class="input-field col s4">
                <select v-model="coap" class="browser-default">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>
        </div>

        <form action="/loans" method="get">
            <button :disabled="isFormInvalid" class="btn-large waves-effect waves-light primary-color" type="submit"
                @click="submitForm">Update
                <i class="material-icons left">edit</i>
            </button>
        </form>
    </div>
</template>

<script>
import ClientDataService from "/src/services/ClientDataService";
import LoanDataService from "/src/services/LoanDataService";

export default {
    data() {
        return {
            clients_data: {},
            client_id: null,
            purpose: null,
            amount: null,
            duration: null,
            guarantors: null,
            coap: null,
            type: null,
            status: null,
        }
    },
    computed: {
        isFormInvalid() {
            return !this.purpose ||
                !this.amount ||
                !this.type ||
                !this.duration ||
                this.guarantors<0||
                this.coap<0
        }
    },
    methods: {
        getLoan(){
            LoanDataService.get(this.$route.query.loan)
            .then(res =>{
            this.client_id = res.data.client_id;
            this.purpose = res.data.purpose;
            this.amount = res.data.loan_amount;
            this.duration = res.data.duration;
            this.guarantors = res.data.guarantors;
            this.coap = res.data.coapplicant;
            this.type = res.data.loan_type;
            this.status = res.data.loan_status;
            })
        },
        submitForm() {
            var data = {
                client_id: this.client_id,
                purpose: this.purpose,
                loan_status: this.status,
                loan_amount: this.amount,
                guarantors: this.guarantors,
                coapplicant: this.coap,
                duration: this.duration,
                validated_by: "Juan Dela Cruz",
                loan_type: this.type,
            };
            console.log(data)
            LoanDataService.update(this.$route.query.loan, data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.getLoan()
        var select = document.querySelectorAll('select');
        M.FormSelect.init(select);

    },

}
</script>

<style scoped>
.btn-floating {
    background-color: #E9B81E;

}
.browser-default{
    background-color: #E8E8E8;
    border: none;
    border-bottom: 1px #9e9e9e solid ;
}
.btn-floating i {
    color: black;
}

.btn-floating:hover {
    background-color: white;
}

.container {
    width: 90%;
    margin-top: 2vh;
}

.row {
    display: flex;
    align-items: center;
    margin-left: 2vw;
    margin-right: 2vw;
}

.input-field {
    margin: 3px;
}
input{
    padding: 20px;
}
.top-container {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.divider.top {
    margin-bottom: 1rem;
}

.divider {
    margin-top: 1rem;
}

.col {
    margin-left: 0;

}


form {
    margin-top: 2rem;
    text-align: center;
}
</style>
