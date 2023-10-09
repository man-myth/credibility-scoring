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
            <div class="input-field col s4">
                <input id="name" type="text" v-model="name">
            </div>
            <div class="col s2 right-align">
                <b> Picture:</b>
            </div>
            <div class="input-field col s4">
                <div class="waves-effect waves-light btn modal-trigger" href="#image-modal" @click="showImageModal">
                    <i class="material-icons">add</i>
                </div>
                <div id="image-modal" class="modal">
                    <div class="modal-content">
                        <h4>Upload image</h4>
                        <input type="file" id="file-input" name="filename" accept="image/*">
                        <div class="image-container"></div>
                        <div class="modal-close waves-effect waves-light btn hide upload" type="submit">Upload </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- Second Row -->
        <div class="row">
            <div class="col s2">
                <b>Birthday:</b>
            </div>
            <div class="input-field col s3">
                <input id="birthdate" type="text" class="datepicker" v-model="birthday" @change="setBirthday">
            </div>
            <div class="col s1"></div>
            <div class="col s2 right-align">
                <b>Marital Status:</b>
            </div>

            <div class="input-field col s4">
                <select v-model="marital_status">
                    <option value="" disabled selected></option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Separated">Separated</option>
                </select>
            </div>
        </div>

        <!-- Third Row -->
        <div class="row">
            <div class="col s2">
                <b>Dependents:</b>
            </div>
            <div class="input-field col s3">
                <input id="name" type="number" v-model="dependents" pattern="?[0-9]*">
            </div>
            <div class="col s1 right-align">
                <b>Sex:</b>
            </div>
            <div class="input-field col s2">
                <select v-model="gender">
                    <option value="" disabled selected></option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
            <div class="col s1">
                <b>Contact:</b>
            </div>
            <div class="input-field col s3">
                <input id="contact" type="text" v-model="contact">
            </div>
        </div>
        <div class="divider"></div>
        <!-- fourth row -->
        <div class="row">
            <div class="col s2">
                <b> Address:</b>
            </div>
            <div class="input-field col s10">
                <input id="name" type="text" v-model="address">
            </div>
        </div>
        <!-- fifth row -->
        <div class="row">
            <div class="col s2">
                <b>Housing:</b>
            </div>
            <div class="input-field col s3">
                <select v-model="housing">
                    <option value="" disabled selected></option>
                    <option value="Rent">Rent</option>
                    <option value="Own">Own</option>
                    <option value="Free">Living in someone's home for free</option>
                </select>
            </div>
            <div class="col s3 right-align">
                <b>Years in Residence:</b>
            </div>
            <div class="input-field col s4">
                <input id="contact" type="number" v-model="years_residence" pattern="?[0-9]*">
            </div>
        </div>
        <div class="divider"></div>

        <!-- sixth row -->
        <div class="row">
            <div class="col s2">
                <b>Employment Status:</b>
            </div>
            <div class="input-field col s4">
                <select v-model="employment">
                    <option value="" disabled selected></option>
                    <option value="Employed full-time">Fulltime</option>
                    <option value="Employed part-time">Parttime</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Unemployed">Unemployed</option>
                </select>
            </div>
            <div class="col s2 right-align">
                <b>Education:</b>
            </div>
            <div class="input-field col s4">
                <select v-model="education">
                    <option value="" disabled selected></option>
                    <option value="Gradeschool">Gradeschool</option>
                    <option value="High School">Highschool</option>
                    <option value="College">College</option>
                    <option value="None of the above">None of the above</option>
                </select>
            </div>
        </div>

        <!-- seveth row -->
        <div class="row">
            <div class="col s2">
                <b>Job Industry:</b>
            </div>
            <div class="input-field col s10">
                <select v-model="industry">
                    <option value="" disabled selected></option>
                    <option value="Information Technology and Software Development">Information Technology and Software
                        Development</option>
                    <option value="Banking and Finance">Banking and Finance</option>
                    <option value="Manufacturing and Industrial">Manufacturing and Industrial</option>
                    <option value="Retail and Wholesale Trade">Retail and Wholesale Trade</option>
                    <option value="Health Care and Pharmaceuticals">Health Care and Pharmaceuticals</option>
                    <option value="Education and Academia">Education and Academia</option>
                    <option value="Tourism and Hospitality">Tourism and Hospitality</option>
                    <option value="Construction and Engineering">Construction and Engineering</option>
                    <option value="Media and Entertainment">Media and Entertainment</option>
                    <option value="Government and Public Administration">Government and Public Administration</option>
                    <option value="Transportation and Logistics">Transportation and Logistics</option>
                    <option value="Agriculture and Farming">Agriculture and Farming</option>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Energy and Utilities">Energy and Utilities</option>
                    <option value="Professional Services (Legal, Accounting, Consulting, etc.)">Professional Services
                        (Legal, Accounting, Consulting, etc.)</option>
                    <option value="Food and Beverage">Food and Beverage</option>
                    <option value="Networking">Networking</option>
                    <option value="Religious Organizations">Religious Organizations</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Public Works">Public Works</option>
                </select>
            </div>
        </div>

        <!-- eigth row -->

        <div class="row">
            <div class="col s2">
                <b>Income:</b>
            </div>
            <div class="input-field col s3">
                <input id="Income" type="number" v-model="income">
            </div>
            <div class="col s3 right-align">
                <b>Monthly Expenses:</b>
            </div>

            <div class="input-field col s4">

                <input id="Expenses" type="number" v-model="expenses">

            </div>
        </div>
        <div class="divider"></div>

        <!-- nineth row -->
        <div class="row">
            <div class="col s3">
                <b>Current Savings:</b>
            </div>
            <div class="input-field col s3">
                <input id="savings" type="number" v-model="savings">
            </div>
            <div class="col s2 right-align">
                <b>Loan History:</b>
            </div>
            <div class="input-field col s4">
                <select v-model="loan_history">
                    <option value="" disabled selected></option>
                    <option value="All credits paid back duly">All Loans paid</option>
                    <option value="Existing Credits">Existing Credits</option>
                    <option value="No loan history / Never applied for a loan">No loan History</option>
                    <option value="Applied for a loan but declined">Loan Declined</option>

                </select>
            </div>
        </div>

        <!-- tenth row -->
        <div class="row">
            <div class="col s3">
                <b>Properties:</b>
            </div>
            <div class="cards-container col s9">
                <div v-for="(p) in properties" @click="addProperty(p)" class="chip" :id=p>{{ p }}</div>
            </div>
        </div>

        <form action="/clients" method="get">
            <!-- <form > -->
            <button :disabled="isFormInvalid" class="btn-large waves-effect waves-light primary-color" type="button"
                @click="submitForm">Add
                <i class="material-icons left">add</i>
            </button>
        </form>
    </div>
</template>

<script>
import ClientDataService from "/src/services/ClientDataService";
import ScoreDataService from "/src/services/ScoreDataService";
import computeScore from "/src/assets/js/computeCreditScore.js";
import Cropper from 'cropperjs';

export default {

    data() {
        return {
            properties: ['Car', 'Motorcycle', 'Real Estate / Home', 'Jewelry/Precious Metals', 'Stocks', 'Insurance Policy'],
            selectedProperties: [],
            name: null,
            picture: "/test",
            address: null,
            gender: null,
            birthday: null,
            contact: null,
            credit_score: 600,
            marital_status: null,
            dependents: 0,
            education: null,
            housing: null,
            years_residence: null,
            employment: null,
            industry: null,
            loan_history: null,
            income: null,
            expenses: null,
            savings: null,
            image: '',
        }
    },
    computed: {
        isFormInvalid() {
            //             console.log(!this.name)
            //             console.log(!this.picture)
            //             console.log(!this.address)
            //             console.log(!this.gender)
            //             console.log(!this.birthday)
            //             console.log(!this.contact)
            //             console.log(!this.marital_status)
            //             console.log(!this.dependents>=0)
            //             console.log(!this.education)
            //             console.log(!this.housing)
            //             console.log(!this.years_residence)
            //             console.log(!this.employment)
            //             console.log(!this.industry)
            //             console.log(!this.loan_history)
            //             console.log(!this.income)
            //             console.log(!this.expenses)
            //             console.log(!this.savings)
            // console.log("-----------------")
            return !this.name ||
                !this.picture ||
                !this.address ||
                !this.gender ||
                !this.birthday ||
                !this.contact ||
                !this.marital_status ||
                // !this.dependents>=0 ||
                !this.education ||
                !this.housing ||
                !this.years_residence ||
                !this.employment ||
                !this.industry ||
                !this.loan_history ||
                !this.income ||
                !this.expenses ||
                !this.savings;
        }
    },
    methods: {

        computeCreditScore() {
            ScoreDataService.getAll()
                .then(res => {
                    var scorecard = res.data;
                    var score = computeScore(scorecard, this.birthday, this.sex, this.dependents, this.education, this.housing, this.residence, this.employment, this.industry, this.income, this.savings, this.insurance);
                    console.log(score.score)
                    this.credit_score = score.score;

                })
                .then(() => {

                    var data = {
                        name: this.name,
                        picture: this.picture,
                        address: this.address,
                        gender: this.gender,
                        birthday: this.birthday,
                        contact: this.contact,
                        credit_score: this.credit_score,
                        marital_status: this.marital_status,
                        dependents: this.dependents,
                        education: this.education,
                        housing: this.housing,
                        years_residence: this.years_residence,
                        employment: this.employment,
                        industry: this.industry,
                        loan_history: this.loan_history,
                        income: this.income,
                        expenses: this.expenses,
                        savings: this.savings,
                        properties: JSON.stringify(this.selectedProperties),
                        image:this.image
                    };

                    ClientDataService.create(data)
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                })

        },
        addProperty(c) {
            var element = document.getElementById(c)

            if (this.selectedProperties.includes(c)) {
                this.selectedProperties.pop(c)
                element.className = "chip";
                return
            }
            this.selectedProperties.push(c)
            element.classList.add('selected')
        },
        handleFileChange() {
            const file = this.$refs.fileInput.files[0];
            console.log(file);
        },
        setBirthday(event) {
            this.birthday = event.target.value;
        },
        submitForm() {
            this.computeCreditScore();

        }
    },


    mounted() {
        // this.computeCreditScore();
        var datePicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datePicker);
        var select = document.querySelectorAll('select');
        M.FormSelect.init(select);
        var modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);

        var file = document.querySelector('#file-input');
        var image = document.querySelector('.image-container');
        var upload = document.querySelector('.upload');
        let cropper = '';
        // on change show image with crop options
        file.addEventListener('change', e => {
            if (e.target.files.length) {
                // start file reader
                const reader = new FileReader();

                reader.onload = e => {
                    if (e.target.result) {
                        // create new image
                        let img = document.createElement('img');
                        img.id = 'pic';
                        img.src = e.target.result;

                        // clean result before
                        image.innerHTML = '';

                        // append new image
                        image.appendChild(img);
                        // console.log(img)


                        upload.classList.remove('hide');
                        if (cropper) {
                            cropper.destroy();
                        }
                        // init cropper
                        cropper = new Cropper(img, {
                            aspectRatio: 1, // 1:1 aspect ratio
                            viewMode: 1,    // Restrict the crop box to the container
                            dragMode: 'crop',
                            crop: function (event) {
                                // You can access the cropped data using event.detail
                                // console.log(event.detail);
                            }
                        }
                        );
                    }
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });

        // upload image
        upload.addEventListener('click', e => {
            e.preventDefault();
            // get result to data uri
            let imgSrc = cropper.getCroppedCanvas().toDataURL('image/jpeg');
            this.image = imgSrc;

        });
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



.image-container {
    height: 30vh;
}

form {
    margin: 2rem;
    text-align: center;
}

.hide {
    display: none;
}
</style>
