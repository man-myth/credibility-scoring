<template>
    <div class="card main">
        <div class="row right">
            <a class="waves-effect waves-green btn-floating"><i class="material-icons large">edit</i></a>
            <a class="waves-effect waves-green btn-floating" @click="showTable"><i
                    class="material-icons large">close</i></a>
        </div>
        <div class="row"></div>
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
                        <p> {{ client.gender}}</p>
                    </div>
                </div>
                <div class="row center-align">
                    <div class="col s5">
                        <h6>Birthday:</h6>
                    </div>
                    <div class="col s7">
                        <p> {{ client.birthday}}</p>
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
                        <p> {{ client.residence }}</p>
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
                        <p> {{ client.savings}}</p>
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
            </div>
            <div class="col s5">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['client'],
    methods: {
        showTable() {
            this.$emit('close')
        }
    }

}
</script>

<style scoped>
.right a {
    margin-right: 10px;
}

.card.main {
    padding: 1rem;
}

h6, p{
    margin-top: 1px;
}
.card.heading {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 80%; */
}
</style>