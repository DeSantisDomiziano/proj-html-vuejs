<script>
export default {
    name: 'TestimonialsAvada',
    data() {
        return {
            i: 0,
            active: 0,
            testimonials: [
                {
                    firstName: 'sophia',
                    lastName: 'jhones',
                    image: './assets/img/01.webp',
                    overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium blanditiis dolore rem sed quod quibusdam culpa beatae harum. Doloribus eum quod mollitia perferendis? Id, quas sunt veritatis natus temporibus quo iure libero, dignissimos atque doloremque, quod harum. Corrupti, voluptatibus?'
                },
                {
                    firstName: 'kelly',
                    lastName: 'williams',
                    image: './assets/img/01.webp',
                    overview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, reprehenderit ipsa pariatur atque vel inventore odio incidunt. Nobis porro ducimus inventore harum ex necessitatibus doloribus'
                },
                {
                    firstName: 'kate',
                    lastName: 'brown',
                    image: './assets/img/01.webp',
                    overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo id vero in? Minima blanditiis repudiandae totam facere quas laborum voluptas commodi necessitatibus architecto exercitationem quis similique rem illo distinctio expedita facilis, delectus deleniti veniam sequi quos nulla beatae est. Sunt facilis ut enim iure aspernatur velit fuga, suscipit repudiandae. Officia libero exercitationem quidem fugiat?'
                },
                {
                    firstName: 'harold',
                    lastName: 'johnson',
                    image: './assets/img/01.webp',
                    overview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet modi assumenda excepturi. At recusandae ad quibusdam nostrum delectus error id eveniet quas harum provident, molestias necessitatibus aut facilis.'
                }, 
                {
                    firstName: 'grant',
                    lastName: 'thompson',
                    image: './assets/img/01.webp',
                    overview: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repudiandae fugiat molestiae ullam dicta excepturi dolore ex sed.'
                },
            ]
        }
    },
    methods: {
        getImage(i) {
            return `/src/assets/img/testimonials/testimonial-${this.testimonials[i].firstName}.png`
        },

        changeTestimonial(index) {
            this.active = index
            this.i = index
        },

    }
}
</script>
        
<template>
    <div class="container text-center py-5">
        <h2>Testimonials</h2>
        <p>Here's what our happy drivers had to say aboust our service:</p>
        <div class="testimonials active">
            <img :src="getImage(i)" alt="">
            <div class="overview mb-5">
                <p class="mt-5">
                    {{ testimonials[i].overview }}
                </p>
                <h3 class="mt-3 text-capitalize">
                    {{ testimonials[i].firstName + ' ' + testimonials[i].lastName }}
                </h3>
                <button class="dot mx-2" 
                :class=" i == active ? 'active' : ''" 
                v-for="(testimonial, i) in testimonials"
                @click="changeTestimonial(i)">
                </button>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

h2 {
    margin-top: 10rem;
}

img {
    margin-top: 5rem;
    max-width: 240px;
}

.dot {
    height: 16px;
    aspect-ratio: 1;
    border: 2px solid $darker;
    border-radius: 50%;
    display: inline-block;
    background-color: $dark;
}

.dot:not(.active) {
    background-color: transparent;
}
</style>