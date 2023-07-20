<template>
    <div :class="containerClass">
        <div class="row">
            <Cards v-for="card in cards" :cardHeading="card[0]" :cardContent="card[1]"></Cards>
        </div>
        <div class="row">
            <div class="col s12 m8 l8">
                <div class="card">
                    <canvas id="monthlySales" class="card-content" ></canvas>
                </div>
            </div>
            <div class="col s12 m4 l4">
                <div class="card">
                    <canvas id="laonsApproved" class="card-content" ></canvas>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="card">
                    <canvas id="factors" class="card-content" ></canvas>
                </div>
            </div>
            <div class="col 12 m6 l6">
                <div class="card">
                    <canvas id="calendar" class="card-content" ></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cards from "/src/components/Cards.vue";
import Chart from 'chart.js/auto';
export default {
    methods: {
        updateContainerClass() {
            if (window.innerWidth < 993) {
                this.containerClass= 'container'
            } else {
                this.containerClass = 'container-lg'
            }
        }
    },
    components: {
        Cards
    },
    data() {
        return {
            cards: [["Approved", 105], ["Declined", 90], ["Pending", 50]],
            containerClass: 'container-lg'
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateContainerClass);
        const monthlySales = document.getElementById('monthlySales');
        new Chart(monthlySales, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: '# of accepted loans',
                    data: [120, 190, 130, 150, 120, 150],
                    borderWidth: 2
                }]
            },
        });
    },
    // beforeDestroy() {
    //     window.removeEventListener('resize', this.updateContainerClass);
    // }
}
</script>

<style scoped>
.container-lg{
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.row {
    width: 95%;
}

.card{
    border-radius: 40px;
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