<template>
    <div :class="containerClass">
        <div class="row">
            <div class="col m2 l2">
                <h4 class="flow-text">{{ headerTitle }}</h4>
                <div class="title-count"><i class="material-icons">{{ icon }}</i>{{ count }}</div>
            </div>
            <div class="col m7 l7">
                <div class="card">
                    <div class="card-content input-field">
                        <i class="material-icons prefix">search</i>
                        <input type="text" id="search" placeholder="Search" v-model="searchText" @keyup="search">

                    </div>

                </div>
            </div>
            <div class="col m1 l1 center">
                <router-link :to=getLink class="btn-floating btn-medium waves-effect waves-light">
                    <i class="material-icons">add</i>
                </router-link>

            </div>
            <div class="col m1 l1 center">
                <div class="dropdown-trigger btn-floating btn-medium waves-effect waves-light" data-target='dropdown1'>
                    <i class="material-icons">filter_list</i>
                </div>
                <ul id='dropdown1' class='dropdown-content'>
                <li>
                    <a>Gender</a>
                    <input type="text" id="search" placeholder="Search" v-model="searchText" @keyup="search">

                </li>
                <li><a>Age</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a>Credit Score</a></li>
                <li><a><i class="material-icons">view_module</i>four</a></li>
                <li><a><i class="material-icons">cloud</i>five</a></li>
            </ul>   
            </div>
            <div class="col m1 l1 center">
                <div class="btn-floating btn-medium waves-effect waves-light" @click="sortByName">
                    <i class="material-icons">sort_by_alpha</i>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
export default {
    props: ['headerTitle', 'count', 'icon'],
    data() {
        return {
            containerClass: 'container-lg',
            searchText: "",
            sortButtonClickCounter: 0,
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
        getLink() {
            return "/" + this.headerTitle.toLowerCase() + "-new"
        }
    },
    methods: {
        search() {
            this.$emit('search', this.searchText);
        },
        sortByName() {
            this.sortButtonClickCounter++;
            if (this.sortButtonClickCounter >= 3) {
                this.sortButtonClickCounter = 0;
            }
            this.$emit('sortByName', this.sortButtonClickCounter);
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateContainerClass);
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems);
    }
}
</script>

<style scoped>
.center {
    padding: 0;
    display: flex;
    justify-content: center;
}

.row {
    display: flex;
    align-items: center;
}
ul#dropdown1 {
    width: 200px !important;
}
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

.btn-floating i {
    color: black;
}

.card {
    background-color: #ffffff;
}

.card-content {
    padding: 0 1.5rem 0 1.5rem;
}

#search:focus {
    border-bottom: 1px solid #000000;
    box-shadow: 0 1px 0 0 #000000;
}

.input-field .prefix.active {
    color: #000000;
}

.input-field .prefix {
    color: #7f7b7b67;
}

.title-count {
    display: flex;
    align-items: center;
    margin-top: 5px;
}
</style>