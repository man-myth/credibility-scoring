<template>
    <div :class="containerClass">
        <div class="row">
            <div class="col m2 l2">
                <h4 class="flow-text">{{ headerTitle }}</h4>
                <div class="title-count"><i class="material-icons">{{ icon }}</i>{{ count }}</div>
            </div>
            <div class="col m7 l7">
                <div class="card search">
                    <i class="material-icons">search</i>
                    <span>Search</span>
                </div>
            </div>
            <div class="col m1 l1">
                <div class="btn-floating btn-large waves-effect waves-light">
                    <i class="material-icons">add</i>
                </div>

            </div>
            <div class="col m1 l1">
                <div class="btn-floating btn-large waves-effect waves-light">
                    <i class="material-icons">filter_list</i>
                </div>

            </div>
            <div class="col m1 l1">
                <div class="btn-floating btn-large waves-effect waves-light">
                    <i class="material-icons">sort_by_alpha</i>
                </div>

            </div>


            <div></div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: ['headerTitle', 'count', 'icon'],
    data() {
        return {
            containerClass: 'container-lg',
        }
    },
    computed: {
        updateContainerClass() {
            if (window.innerWidth < 993) {
                this.containerClass = 'container'
            } else {
                this.containerClass = 'container-lg'
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.updateContainerClass);
    }
}
</script>

<style scoped>
.container-lg {
    padding: 1rem;
    width: 100%;
}
h4.flow-text {
    margin-bottom: 0;
    margin-top: 15px;
}

.btn-floating {
    background-color: #E9B81E;
}
.btn-floating i{
    color: black;
}
.card.search {
    min-height: 5vh;
    display: flex;
    align-items: center;
}

.search i.material-icons {
    margin: 1rem;

}
.title-count {
    display: flex;
    align-items: center;
    margin-top: 5px;
}
</style>