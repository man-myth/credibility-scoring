<template>
    <td>{{ loan.loan_id }}</td>
    <td v-if="showDetails">{{this.loan.client_name}}</td>
    <td v-else>{{ loan.validated_by }}</td>
    <td>{{ loan.loan_type }}</td>
    <td>{{ loan.purpose }}</td>
    <td>{{ loan.loan_amount }}</td>
    <td>{{ new Date(loan.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' , day:"numeric"}) }}</td>
    <td>{{ loan.duration}}</td>
    <td :class="loan.loan_status">{{ loan.loan_status }}</td>
    <td v-if="showDetails"><i class="material-icons">more_horiz</i></td>
</template>

<script>
import ClientDataService from "/src/services/ClientDataService";

export default {
    props: ['loan', 'showDetails'],
    data(){
        return{
            // client_name: ""
        }
    },
    methods:{
        getClient(){
            ClientDataService.get(this.loan.client_id)
            .then(res =>{
                this.loan.client_name = res.data.name;
                
            })
            .catch(e =>{
                console.log(e)
            })
        },
    },
    mounted(){
        if(this.showDetails){
            this.getClient();
        }
    }
}
</script>

<style>
table {
    font-size: 0.8rem;
    background-color: white;
}

.Approved{
    color: green;
}
.Disapproved{
    color: red;
}

.Pending{
    color: grey;
}

</style>