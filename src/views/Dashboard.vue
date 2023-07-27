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
                    <VCalendar class="calendar" expanded title-position="left" borderless transparent :attributes="getAttributes()" />
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
    },
    components: {
        Cards,
        VCalendar: Calendar
    },
    data() {
        return {
            cards: [["Approved", 105], ["Declined", 90], ["Pending", 50]],
            containerClass: 'container-lg',
            salesData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
                    data: [51, 72, 23,],
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
        window.addEventListener('resize', this.updateContainerClass);
        const monthlySales = document.getElementById('monthlySales');
        new Chart(monthlySales, {
            type: 'line',
            data: this.salesData,
            options:{
                maintainAspectRatio: false,

            }
        });

        const loansApproved = document.getElementById('loansApproved');
        new Chart(loansApproved, {
            type: 'bar',
            data: this.loansData,
            options:{
                maintainAspectRatio: false,

            }
        });

        const factors = document.getElementById('factors');
        new Chart(factors, {
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

.chart-container.sales, .chart-container.loans{
    height: 40vh;
}

.factors, #calendar, .calendar {
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
} */</style>