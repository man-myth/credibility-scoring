<template>
    <div class="card main">
        <div class="row right">
            <a class="waves-effect waves-green btn-floating modal-trigger" data-target="confirmationModal"><i
                    class="material-icons large">delete_forever</i></a>
            <router-link :to="{ name: 'EditLoan', query: { loan: loan.loan_id } }"
                class="waves-effect waves-green btn-floating" @click="showTable">
                <i class="material-icons large">edit</i>
            </router-link>
            <a class="waves-effect waves-green btn-floating" @click="showTable"><i
                    class="material-icons large">close</i></a>
        </div>
        <!-- Modal Structure -->
        <div id="confirmationModal" class="modal">
            <div class="modal-content">
                <h4 class="center">Are you sure you want to delete this entry?</h4>
                <p>Loan ID : {{ loan.loan_id }}</p>
                <p>Client Name : {{ client.name }}</p>
                <p>Loan Amount: {{ loan.loan_amount }}</p>
            </div>
            <div class="modal-footer">
                <a href="/loans" class="modal-close waves-effect waves-green btn-flat" @click="deleteEntry">Yes</a>
                <a class="modal-close waves-effect waves-green btn-flat">No</a>

            </div>
        </div>
        <div class="row">
            <div class="col s7">
                <div class="card heading">
                    <div class="card-title">Demographics</div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Client ID:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.client_id }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Name:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.name }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Gender:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.gender }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Birthday:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.birthday }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Contact:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.contact }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Address:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.address }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Education:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.education }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Martial Status:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.marital_status }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Dependents:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.dependents }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Industry:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.industry }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Monthly Income:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.income }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Savings Account Balance:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.savings }}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Monthly Expenses:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.expenses }}</p>
                    </div>
                </div>
                <div class="row center-align buttons-container">
                    <a href="/loans" :class="{ 'disabled-link': !checkStatus }" class="col s5 waves-effect waves-light btn approve" @click="approveLoan">Approve</a>
                    <a href="/loans" :class="{ 'disabled-link': !checkStatus }" class="col s5 waves-effect waves-light btn disapprove" @click="disapproveLoan">Disapprove</a>
                </div>
            </div>
            <div class="col s5 ">
                <div class="row center-align">
                    <div class="image-container col s12">
                        <ProfileAvatar :username="client.name" :image="picture" class="materialboxed" customSize="150px" colorType="pastel">
                        </ProfileAvatar>
                    </div>
                </div>
                <div class="col s12">
                    <div class="card heading">
                        <div class="card-title">Loan</div>  
                    </div>
                    <div class="row center-align">
                        <div class="col s5">
                            <h6>Loan ID:</h6>
                        </div>
                        <div class="col s7">
                            <p> {{ loan.loan_id }}</p>
                        </div>
                    </div>
                    <div class="row center-align">
                        <div class="col s5">
                            <h6>Amount:</h6>
                        </div>
                        <div class="col s7">
                            <p> {{ loan.loan_amount }}</p>
                        </div>
                    </div>
                    <div class="row center-align">
                        <div class="col s5">
                            <h6>Purpose:</h6>
                        </div>
                        <div class="col s7">
                            <p> {{ loan.purpose }}</p>
                        </div>
                    </div>
                    <div class="row center-align">
                        <div class="col s5">
                            <h6>Duration:</h6>
                        </div>
                        <div class="col s7">
                            <p> {{ loan.duration }}</p>
                        </div>
                    </div>
                    <div class="row center-align">
                        <div class="col s5">
                            <h6>Guarantors:</h6>
                        </div>
                        <div class="col s7">
                            <p> {{ loan.guarantors }}</p>
                        </div>
                    </div>
                    <div class="row center-align">
                        <div class="col s5">
                            <h6>Coaaplicant:</h6>
                        </div>
                        <div class="col s7">
                            <p> {{ loan.coapplicant }}</p>
                        </div>
                    </div>
                    <div class="credit-score">
                        <div >Credit Score:{{ client.credit_score }} </div>
                        <div >
                            <canvas id="gaugeArea2"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import ProfileAvatar from 'vue-profile-avatar';
import '../assets/js/gauge.min.js';
import LoanRow from '/src/components/LoanRow.vue'
import EditClient from '/src/components/EditClient.vue'
import LoanDataService from "/src/services/LoanDataService";
import ClientDataService from "/src/services/ClientDataService";

export default {
    components: {
        ProfileAvatar,
        LoanRow,
        EditClient
    },
    props: ['loan'],
    data() {
        return {
            client: {},
            picture:"",
        }
    },
    computed:{
        checkStatus(){
            console.log(this.loan.loan_status!="Approved" && this.loan.loan_status!="Disapproved")

            return (this.loan.loan_status!="Approved" && this.loan.loan_status!="Disapproved");
        }
    },
    methods: {
        approveLoan(){
            this.loan.loan_status = "Approved";
            LoanDataService.update(this.loan.loan_id, this.loan)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        disapproveLoan(){
            this.loan.loan_status = "Disapproved";
            LoanDataService.update(this.loan.loan_id, this.loan)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        deleteEntry() {
            LoanDataService.delete(this.loan.loan_id)
                .catch(e => {
                    console.log(e);
                })
        },
        showTable() {
            this.$emit('close')
        },
        getClient() {
            ClientDataService.get(this.loan.client_id)
                .then(res => {
                    this.client = res.data;
                    this.getProfilePic();
                    // console.log(this.loans)
                })
                .catch(e => {
                    console.log(e);
                })
        },
        getProfilePic() {
            ClientDataService.getImage(this.client.picture)
                .then(res => {
                    this.picture = res.config.baseURL + res.config.url;
                })
                .catch(e => {
                    console.log(e);
                })
        }

    },
    mounted() {
        this.getClient();
        var opts = {
            angle: -0.20, // The span of the gauge arc
            lineWidth: 0.20, // The line thickness
            radiusScale: 1, // Relative radius
            pointer: {
                length: 0.6,
                strokeWidth: 0.035,
                color: '#000000'
            },
            highDpiSupport: true,
            staticLabels: {
                font: "10px sans-serif",
                labels: [300, 410, 520, 630, 740, 850],
            },
            staticZones: [
                { strokeStyle: "#E14023", min: 300, max: 409 }, // Red from 100 to 130
                { strokeStyle: "#ED6E11", min: 410, max: 519 }, // Yellow
                { strokeStyle: "#FCD800", min: 520, max: 629 }, // Green
                { strokeStyle: "#ABCC63", min: 630, max: 739 }, // Yellow
                { strokeStyle: "#00552B", min: 740, max: 850 }  // Red
            ],
        };
        const target = document.getElementById('gaugeArea2');
        const gauge = new Gauge(target).setOptions(opts);
        gauge.setMinValue(300);
        gauge.maxValue = 850;
        gauge.set(this.client.credit_score); // set actual value


        var materialBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialBox);
        var modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);

    }

}
</script>

<style scoped>
.credit-score{
    padding: 5px;
    border-radius: 38px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap:1rem;   
    border: 1px solid black;   
}
.right a {
    margin-right: 10px;
}

.card.main {
    padding: 1rem;
}

h6,
p {
    margin-top: 1px;
}

p {
    font-weight: bold;
}

.card.heading {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 80%; */
}

table {
    margin: 1rem;
    width: 95%;
}

.image-container {
    display: flex;
    justify-content: center;

}

div#confirmationModal {
    width: 40vw;
}

.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-content p {
    font-weight: normal;
}
.approve{
    border-radius: 38px;
    color: white;
    background-color: #27C353;
}
.disapprove{
    border-radius: 38px;
    color: white;
    background-color: #FF0000;
}

.buttons-container{
    margin-top: 8px;
   display: flex;
}
.materialboxed{
    margin-top: 10px;
}
.disabled-link{
    color: black;
    background-color: grey;
  pointer-events: none;
  text-decoration: none;
}
canvas{
    width: 300px;
    height: 150px;
}
</style>