<script>
export default {
    name: 'CourseOption',
    data() {
        return {
            learnMore: [
                {
                    info: 'Pass Plus',
                    img: 'courses-passplus'
                },
                {
                    info: 'Intensive Course',
                    img: 'course-intensive'
                },
                {
                    info: 'Instructor',
                    img: 'courses-instructor'
                }
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/course/${name}.jpg`, import.meta.url).href
        }
    }
}
</script>

<template>

<div class="col-auto" v-for="item in learnMore">
    <img :src="getImageUrl(item.img)" alt="">
    <p class="">{{ item.info }}</p>
    <button>learn more</button>
</div>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.col-auto {
    color: $details;

    button {
        border: 3px solid $details;
        color: $details;
        padding: 0.25rem 1rem;
        background-color: transparent;
        border-radius: 2rem;
        font-size: 1.3rem;
    }

    p {
        font-size: 1.75rem;
        margin: 1.5rem 0 0.5rem 0;
        font-weight: 600;
    }
}

img {
    max-width: 200px;
}
</style>