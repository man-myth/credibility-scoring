<template>
    <!-- HEADER -->
    <div class="container">
        <div class="top-container">
            <router-link to='/clients' class="btn-floating btn-meduim waves-effect waves-light">
                <i class="material-icons">arrow_back</i>
            </router-link>
            <h4>New Client</h4>
        </div>

        <!-- First Row -->
        <div class="divider top"></div>
        <div class="row">
            <div class="col s2">
                <b> Name:</b>
            </div>
            <div class="input-field col s10">
                <input id="name" type="text">
            </div>
        </div>
        <!-- Second Row -->
        <div class="row">
            <div class="col s2">
                <b>Birthday:</b>
            </div>
            <div class="input-field col s3">
                <input id="birthdate" type="text" class="datepicker">
            </div>
            <div class="col s1"></div>
            <div class="col s2">
                <b>Marital Status:</b>
            </div>

            <div class="input-field col s4">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Widowed</option>
                    <option value="4">Divorced</option>
                    <option value="5">Separated</option>
                </select>
            </div>
        </div>

        <!-- Third Row -->
        <div class="row">
            <div class="col s2">
                <b>Dependents:</b>
            </div>
            <div class="input-field col s3">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="col s1">
                <b>Sex:</b>
            </div>
            <div class="input-field col s2">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                </select>
            </div>
            <div class="col s1">
                <b>Contact:</b>
            </div>
            <div class="input-field col s3">
                <input id="contact" type="text">
            </div>
        </div>
        <div class="divider"></div>
        <!-- fourth row -->
        <div class="row">
            <div class="col s2">
                <b> Address:</b>
            </div>
            <div class="input-field col s10">
                <input id="name" type="text">
            </div>
        </div>
        <!-- fifth row -->
        <div class="row">
            <div class="col s2">
                <b>Housing:</b>
            </div>
            <div class="input-field col s3">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">Rent</option>
                    <option value="2">Own</option>
                    <option value="3">Living in someone's home for free</option>
                </select>
            </div>
            <div class="col s3">
                <b>Years in Residence:</b>
            </div>

            <div class="input-field col s4">
                <select ref="mySelect">
                    <option value="" disabled selected></option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Widowed</option>
                    <option value="4">Divorced</option>
                    <option value="5">Separated</option>
                </select>
            </div>
        </div>
        <div class="divider"></div>

        <!-- sixth row -->
        <div class="row">
            <div class="col s3">
                <b>Employment Status:</b>
            </div>
            <div class="input-field col s9">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">Rent</option>
                    <option value="2">Own</option>
                    <option value="3">Living in someone's home for free</option>
                </select>
            </div>
        </div>

        <!-- seveth row -->
        <div class="row">
            <div class="col s3">
                <b>Occpation:</b>
            </div>
            <div class="input-field col s9">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">Rent</option>
                    <option value="2">Own</option>
                    <option value="3">Living in someone's home for free</option>
                </select>
            </div>
        </div>

        <!-- eigth row -->

        <div class="row">
            <div class="col s2">
                <b>Income:</b>
            </div>
            <div class="input-field col s3">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">Rent</option>
                    <option value="2">Own</option>
                    <option value="3">Living in someone's home for free</option>
                </select>
            </div>
            <div class="col s3">
                <b>Monthly Expenses:</b>
            </div>

            <div class="input-field col s4">
                <select ref="mySelect">
                    <option value="" disabled selected></option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Widowed</option>
                    <option value="4">Divorced</option>
                    <option value="5">Separated</option>
                </select>
            </div>
        </div>
        <div class="divider"></div>

        <!-- seveth row -->
        <div class="row">
            <div class="col s3">
                <b>Current Savings:</b>
            </div>
            <div class="input-field col s9">
                <select>
                    <option value="" disabled selected></option>
                    <option value="1">Rent</option>
                    <option value="2">Own</option>
                    <option value="3">Living in someone's home for free</option>
                </select>
            </div>
        </div>

        <!-- seveth row -->
        <div class="row">
            <div class="col s3">
                <b>Properties:</b>
            </div>
            <div class="cards-container col s9">
                <div v-for="(p) in properties" @click="addProperty(p)" class="chip" :id=p>{{ p }}</div>
            </div>
        </div>

        <form action="/clients" method="get">
            <button  class="btn-large waves-effect waves-light primary-color" type="submit">Add
                <i class="material-icons left">add</i> 
            </button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            properties: ['Car', 'Motorcycle', 'Real Estate / Home', 'Jewelry/Precious Metals', 'Stocks', 'Insurance Policy'],
            selectedProperties: []
        }
    },
    methods: {
        addProperty(c) {
            console.log(this.selectedProperties)
            var element = document.getElementById(c)

            if (this.selectedProperties.includes(c)) {
                this.selectedProperties.pop(c)
                element.className = "chip";
                return
            }
            this.selectedProperties.push(c)
            element.classList.add('selected')
        },
    },
    mounted() {
        var datePicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datePicker);
        var select = document.querySelectorAll('select');
        M.FormSelect.init(select);

        // var chips = document.querySelectorAll('.chip');
        // chips.forEach((c) => { c.addEventListener("click", this.addProperty) })
    },

    beforeUnmount() {
        var select = document.querySelectorAll('select');
        select.forEach((s) => { M.FormSelect.getInstance(s).destroy() })
    }
}
</script>

<style scoped>
.btn-floating {
    background-color: #E9B81E;

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

.chip {
    background-color: #ffffff;
    margin: 5px;
}

.row {
    display: flex;
    align-items: center;
    margin-left: 2vw;
    margin-right: 2vw;
}

.input-field {
    margin: auto;
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

.cards-container {
    background-color: #D9D9D9;
    height: 12vh;
    margin: 10px;
}

.chip:hover {
    border: 1px solid;
}


.chip.selected {
    border: 1px solid;
    background-color: #757575;
    color: white;
}
form {
    margin: 2rem;
    text-align: center;
}
</style>
