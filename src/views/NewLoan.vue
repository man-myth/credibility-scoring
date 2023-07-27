<template>
    <!-- HEADER -->
    <div class="container">
        <div class="top-container">
            <router-link to='/clients' class="btn-floating btn-meduim waves-effect waves-light">
                <i class="material-icons">arrow_back</i>
            </router-link>
            <h4>New Loan</h4>
        </div>

        <!-- First Row -->
        <div class="divider top"></div>
        <div class="row">
            <div class="col s2">
                <b> Clent ID:</b>
            </div>
            <div class="input-field col s10">
                <input id="name" type="text">
            </div>
        </div>

        <div class="row">
            <div class="col s2">
                <b> Purpose:</b>
            </div>
            <div class="input-field col s10">
                <input id="name" type="text">
            </div>
        </div>

        <!-- Two column -->
        <div class="row">
            <div class="col s2">
                <b>Loan Amount:</b>
            </div>
            <div class="input-field col s3">
                <input id="birthdate" type="text" class="datepicker">
            </div>
            <div class="col s1"></div>
            <div class="col s2">
                <b>Duration:</b>
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

        <div class="row">
            <div class="col s2">
                <b>Guarantors:</b>
            </div>
            <div class="input-field col s3">
                <input id="birthdate" type="text" class="datepicker">
            </div>
            <div class="col s1"></div>
            <div class="col s2">
                <b>Co-applicant:</b>
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

        <form action="/clients" method="get">
            <button class="btn-large waves-effect waves-light primary-color" type="submit">Add
                <i class="material-icons left">add</i>
            </button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    mounted() {
        // var datePicker = document.querySelectorAll('.datepicker');
        // M.Datepicker.init(datePicker);
        var select = document.querySelectorAll('select');
        M.FormSelect.init(select);

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


form {
    margin-top: 2rem;
    text-align: center;
}
</style>
