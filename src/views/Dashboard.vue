<template>
    <div class="main-panel">
        <div class="status-cards">
            <Cards v-for="card in cards" :cardHeading="card[0]" :cardContent="card[1]"></Cards>
        </div>
        <div class="montly-sales card">
            <canvas id="myChart"></canvas>
        </div>
    </div>
</template>

<script>
import Cards from "/src/components/Cards.vue";
import Chart from 'chart.js/auto';
export default {
    components: {
        Cards
    },
    data() {
        return {
            cards: [["Approved", 105], ["Declined", 90], ["Pending", 50]]
        }
    },
    mounted() {
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: '# of accepted loans',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
</script>

<style>
.main-panel{
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 75vw;
}
.status-cards {
    width: 75vw;
    display: flex;
    justify-content: space-evenly;
    right: 0%;
}

.card-content {
    width: 20vw;
}
.montly-sales{
    width: 40vw;
    padding: 5px;
    height: 40vh;
}

@media only screen and (max-width: 992px) {
    .main-panel {
        width: 90vw;
    }
}
</style>