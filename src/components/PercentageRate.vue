<script>
    export default {
        name: 'PercentageRate',
        data() {
            return {
                rates: [
                    {
                        txt: 'pass rate',
                        perc: 95
                    },
                    {
                        txt: 'referral rate',
                        perc: 100
                    },
                    {
                        txt: 'accident rate',
                        perc: 0
                    }
                ]
            }
        },
        mounted() {
            const percentageRate = document.querySelectorAll('circle')
            percentageRate.forEach((rate, index) => {
                rate.style.strokeDashoffset = `${ (this.rates[index].perc * 6.52).toFixed(0) - 652 }`
                if (rate.style.strokeDashoffset == -652) {
                    rate.style.strokeWidth = 0
                }
            })
        }
    }
</script>

<template>
    <div class="container mb-3">
        <div class="row row-cols-3">
            <div class="col" v-for="rate in rates">
                <div class="card justify-content-center align-items-center py-5">
                    <div class="outer position-relative">
                        <div class="inner d-flex justify-content-center align-items-center">
                            <div id="number">
                                {{ rate.perc }}%
                            </div>
                        </div>
                        <div class="svg-circle">
                            <svg height="240" width="240">
                                <circle cx="120" cy="120" r="105" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <h2 class="my-5 text-uppercase">{{ rate.txt }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card {
    border-top: 9px solid $primary;
    border-radius: 2rem 2rem 1.5rem 1.5rem;
    position: relative;
    top: -230px;
    box-shadow: 0 25px 10px 4px $bg-input;
}

.outer {
    height: 240px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 6px 6px 10px -1px $dark-opacity,
                -6px -6px 10px -1px $smoke-white;
    padding: 30px;
}

.inner {
    height: 180px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: inset 4px 4px 10px -1px $dark-opacity,
                inset -4px -4px 10px -1px $smoke-white;
}

#number {
    font-weight: 600;
    font-size: 2.25rem;
}

circle {
    fill: none;
    stroke: $primary;
    stroke-width: 25px;
    stroke-dasharray: 652;
    stroke-dashoffset: 652;
}

.svg-circle {
    transform: rotate(240deg);
    position: absolute;
    top: 1px;
    left: 1px;
}
</style>