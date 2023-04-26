<script>
    export default {
        name: 'NavJumbo',
        data() {
            return {
                navbar: [
                    {
                        item: 'HOME',
                        new: false
                    },
                    {
                        item: 'ABOUT',
                        new: false
                    },
                    {
                        item: 'PRICES',
                        new: false
                    },
                    {
                        item: 'COURSES',
                        new: true
                    },
                    {
                        item: 'LOCATION',
                        new: false
                    },
                    {
                        item: 'BLOG',
                        new: false
                    },
                ]
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row justify-content-between py-4">
            <div class="col-auto">
                <img src="../assets/img/logo/avada-drivers-logo-1x.png" alt="">
            </div>
            <div class="col-auto">
                <div class="row">
                    <div class="col-auto align-self-end p_hover position-relative" v-for="nav in navbar">
                        {{ nav.item }}
                        <span v-if="nav.new">new</span>
                    </div>
                    <div class="col-auto align-self-end">
                        <div class="btn">BOOK NOW</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.btn {
    position: relative;
    top: 7px;
    color: $light;
    background-color: $primary;
    border-radius: 2rem;

    &:hover {
        background-color: $hover;
    }
}

* {
    font-weight: bold;
}
.p_hover:hover {
    border-bottom: 3px solid $primary;
    color: $primary;

    span {
        color: $light;
    }
}

span {
    background-color: $primary;
    padding: 0.1rem 0.4rem;
    border-radius: 0.25rem;
}
</style>