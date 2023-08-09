<template>
    <div :class="containerClass">
        <div class="row top-cards">
            <Cards v-for="card in cards" :cardHeading="card[0]" :cardContent="card[1]"></Cards>
        </div>
        <div class="row">
            <div class="col s12 m8 l8">
                <div class="card">
                    <div class="chart-container sales">
                        <canvas id="monthlySales" class="card-content"></canvas>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l4">
                <div class="card">
                    <div class="chart-container loans">
                        <canvas id="loansApproved" class="card-content"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m5 l5">
                <div class="card">
                    <div class="chart-container factors">
                        <canvas id="factors" class="card-content"></canvas>
                    </div>
                </div>
            </div>
            <div class="col 12 m7 l7">
                <div class="card" id="calendar">
                    <VCalendar class="calendar" expanded title-position="left" borderless transparent
                        :attributes="getAttributes()" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cards from "/src/components/Cards.vue";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';

import LoanDataService from "/src/services/LoanDataService";

export default {
    methods: {
        updateContainerClass() {
            if (window.innerWidth < 993) {
                this.containerClass = 'container'
            } else {
                this.containerClass = 'container-lg'
            }
        },
        getAttributes() {
            return [{
                dates: new Date(2023, 7, 3),
                dot: {
                    color: "red",
                    // class: todo.isComplete ? 'opacity-75' : '',
                },
                popover: {
                    label: "Alex Smith payment",
                },
            }];
        },

        getLoans() {
            LoanDataService.getAll()
                .then(res => {
                    this.loans = res.data;
                    this.cards[0][1] = res.data.filter((item) => item.loan_status === "Approved").length;
                    this.cards[1][1] = res.data.filter((item) => item.loan_status === "Disapproved").length;
                    this.cards[2][1] = res.data.filter((item) => item.loan_status === "Pending").length;
                    this.countByType();
                    this.countByMonth();
                })
                .then(()=>{
                    this.initTables()})
                .catch(e => {
                    console.log(e);
                })

        },
        countByMonth() {
            var currentMonth = new Date().getMonth();
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var data = {};
            for (var i = currentMonth - 5; i <= currentMonth; i++) {
                data[monthNames[i]] = 0;
            }
            this.loans.forEach((loan) => {
                var month = new Date(loan.createdAt).getMonth();
                data[monthNames[month]] += 1;
            }
            )

            const entries = Object.entries(data);
            entries.sort((a, b) => {
                return monthNames.indexOf(a[0]) - monthNames.indexOf(b[0]);
            });
            const keys = entries.map(entry => entry[0]);
            const values = entries.map(entry => entry[1]);

            this.salesData.labels = keys;
            this.salesData.datasets[0].data = values;
            // this.initTables();  
        },
        countByType() {
            var data = [0, 0, 0];
            this.loans.forEach((loan) => {
                if (loan.loan_type == "Personal") {
                    data[0] += 1;
                } else if (loan.loan_type == "Business") {
                    data[1] += 1;
                } else if (loan.loan_type == "end-to-end") {
                    data[2] += 1;
                }
            })
            this.loansData.datasets[0].data = data;
       
        },
        initTables() {
            var loansApproved = document.getElementById('loansApproved');
            var monthlySales = document.getElementById('monthlySales');
            var factors = document.getElementById('factors');

            this.loansChart = new Chart(loansApproved, {
                type: 'bar',
                data: this.loansData,
                options: {
                    maintainAspectRatio: false,
                }
            });

            this.salesChart = new Chart(monthlySales, {
                type: 'line',
                data: this.salesData,
                options: {
                    maintainAspectRatio: false,

                }
            });
            this.factorsChart = new Chart(factors, {
                plugins: [ChartDataLabels],
                type: 'doughnut',
                data: this.factorsData,
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            // color: function (data) {
                            //     // var rgb = hexToRgb(data.dataset.backgroundColor[data.index]);
                            //     console.log(data.dataset.backgroundColor[data.index])
                            //     var threshold = 140;
                            //     var luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
                            //     return luminance > threshold ? 'black' : 'white';
                            // },
                        },
                        legend: {
                            position: 'right'
                        },
                    }
                }
            });
        }
    },

    components: {
        Cards,
        VCalendar: Calendar
    },
    data() {
        return {
            cards: [["Approved", 0], ["Declined", 0], ["Pending", 0]],
            loans: [],
            containerClass: 'container-lg',
            loaded: false,
            salesChart: {},
            loansChart: {},
            factorsChart: {},
            salesData: {
                labels: ['February', 'January', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: '# of accepted loans',
                    data: [120, 190, 130, 150, 120, 150],
                    borderWidth: 2
                }]
            },
            loansData: {
                labels: ['Personal', 'end-to-end', 'Business'],
                datasets: [{
                    label: '# of accepted loans',
                    data: [0, 0, 0],
                    borderWidth: 2
                }]
            },
            factorsData: {
                labels: ['Age', 'Dependents', 'Marital Status', 'Education', 'Gender', 'Income', 'Occupation', 'Assets'],
                datasets: [{
                    label: '# of accepted loans',
                    data: [11, 10, 9, 7, 10, 21, 20, 12,],
                }]
            }
        }
    },
    mounted() {
        this.getLoans();
        window.addEventListener('resize', this.updateContainerClass);
    }

}
</script>

<style scoped>
.container-lg {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.row {
    width: 95%;
}

#calendar {
    display: flex;
    justify-content: center;
    padding: 1rem;
    /* overflow: hidden; */
}

.chart-container.sales,
.chart-container.loans {
    height: 40vh;
}

.factors,
#calendar,
.calendar {
    height: 38vh;
}

.chart-container {
    position: relative;
    margin: auto;
}

/* @media only screen and (max-width: 992px) {
    .container-lg{
        width: 90vw;
    }
}

@media only screen and (max-width: 1450px) {
    .container-lg{
        width: 70vw;
    }
} */
</style>