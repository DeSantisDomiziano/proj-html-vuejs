<script>
import CardInstructor from './CardInstructor.vue'

export default {
    name: 'OurIstructos',
    components: {
        CardInstructor
    }
}
</script>

<template>
    <div class="container position-relative">
        <div class="position-absolute">
            <h2 class="mb-4">Your Instructor</h2>
            <div class="row justify-content-between mb-5">
                <div class="col">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur culpa ad recusandae ea facilis rerum sunt cupiditate ipsam eius?
                </div>
                <div class="col-auto">
                    <button class="text-uppercase">More About us</button>
                </div>
            </div>
    
            <div class="row">
                <CardInstructor/>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


.container {
    min-height: 600px;
}
.row {
    flex-wrap: nowrap;

    .col {
        font-size: 1.35rem;
        color: $gray
    }
}

button {
    background-color: $primary;
    border: none;
    padding: 0.5rem 3.75rem;
    border-radius: 2rem;
    color: $light;
    font-weight: 600;

    &:hover {
        background-color: $hover;
    }
}
</style>