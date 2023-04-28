<script>
export default {
    name: 'TopFooter',
    data() {
        return {
            contacts: [
                {
                    txt: '12345 North Main Street, New York, NY 555555',
                    icon: 'fa-house'
                },
                {
                    txt: '1.800.555.6789',
                    icon: 'fa-phone flip="horizontal"'
                },
                {
                    txt: 'info@your.domain.com',
                    icon: 'fa-envelope'
                },
                {
                    txt: 'Theme-Fusion.com',
                    icon: 'fa-link'
                }
            ],
            courses: [
                {
                    txt: 'Pass Plus',
                    icon: 'fa-arrow-alt-circle-right'
                },
                {
                    txt: 'Intesive Course',
                    icon: 'fa-arrow-alt-circle-right'
                },
                {
                    txt: 'Automatic',
                    icon: 'fa-arrow-alt-circle-right'
                },
                {
                    txt: 'Instructor Training',
                    icon: 'fa-arrow-alt-circle-right'
                }
            ]
        }
    }
}
</script>
<!--  <f-a-icon icon="fa-solid fa-phone" flip="horizontal" />
 <f-a-icon icon="fa-solid fa-envelope" />
 <f-a-icon icon="fa-solid fa-link" />
 <f-a-icon icon="fa-solid fa-link" /> -->
 <!-- <f-a-icon icon="fa-regular fa-arrow-alt-circle-right" /> -->
<template>
    <div class="container py-5">
        <div class="row row-cols-4 mt-5">
            <div class="col">
                <img src="../assets/img/logo/avada-drivers-logo-2x.png" alt="">
                <p class="mt-4">Avada Driving School is the right choice for experienced drivers looking for a refresh course, or the brand new driver wanting to pass first time</p>
            </div>
            <div class="col">
                <h2>CONTACT DETALIS</h2>
                <ul>
                    <li class="d-flex" v-for="contact in contacts">
                        <a href="#">
                            <div class="icon">
                                <f-a-icon :icon="`fa-solid ${contact.icon}`" />
                            </div>
                             <p>{{ contact.txt }}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col" id="courses">
                <h2>COURSES</h2>
                <ul>
                    <li class="d-flex" v-for="course in courses">
                        <a href="#">
                            <div class="icon">
                                <f-a-icon :icon="`fa-regular ${course.icon}`" />
                            </div>
                             <p>{{ course.txt }}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col d-flex flex-column">
                <img src="../assets/img/footer/footer-ad-grid.png" alt="">
                <button class="mt-4 w-50 align-self-center">BOOK NOW</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.container {
    color: $gray;
}

.icon {
    margin-right: 1rem;
}

h2 {
    color: $light;
}

ul {
    padding: 0;
    flex-direction: column;
}

a {
    color: inherit; 
    text-decoration: inherit; 
    display: flex;
}

#courses {
    p,
    a {
        color: $primary
    }
}

button {
    border: none;
    background-color: $primary;
    color: $light;
    font-weight: 700;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;

    &:hover {
        background-color: $hover;
    }
}
</style>