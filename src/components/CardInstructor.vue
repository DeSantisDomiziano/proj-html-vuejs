<script>
export default {
    name: 'CardInstructor',
    data() {
        return {
            instructors: [
                {
                    photo: 'instructor-mikehart',
                    name: 'mike hart',
                    social: [ 'fa-facebook-f', 'fa-twitter', 'fa-instagram'],
                    overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis',
                },
                {
                    photo: 'instructor-angelahart',
                    name: 'angela hart',
                    social: [ 'fa-facebook-f', 'fa-twitter', 'fa-instagram'],
                    overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis',
                },
                {
                    photo: 'instructor-johnsmith',
                    name: 'jhon smith',
                    social: [ 'fa-facebook-f', 'fa-twitter', 'fa-instagram'],
                    overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis',
                },
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/instructor/${name}.jpg`, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="col-4" v-for="instructor in instructors">
        <div class="card p-5 text-center mb-5">
            <img :src="getImageUrl(instructor.photo)" alt="">
            <h2 class="text-capitalize mt-3">{{ instructor.name }}</h2>
            <div class="icon my-2">
                <a href="#" v-for="(social) in instructor.social">
                    <f-a-icon :icon="`fa-brands ${social}`" />
                </a>
            </div>
            <p class="my-4">{{ instructor.overview }}</p>
        </div>
    </div>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

a {
    display: inline;
    padding: 0 1rem;
    color: $gray;
    font-size: 1.25rem;

    &:hover {
        color: $details;
    }
}

.card {
    border-top: 7px solid $primary;
    border-radius: 1.5rem 1.5rem 0.5rem 0.5rem;
    box-shadow: 0 25px 10px 4px $gray;
}

</style>