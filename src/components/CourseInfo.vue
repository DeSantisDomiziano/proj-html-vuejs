<script>
    export default {
        name: 'CourseInfo'
    }
</script>

<template>
    <div class="container text-center py-5">
        <div class="row py-5">
            <div class="col-4">
                <div class="card px-4 py-5 position-relative">
                    <h2>Courses</h2>
                    <p class="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda velit obcaecati illum ex aperiam odit exercitationem minima earum optio?</p>
                    <button class="my-4 align-self-center">COURSE INFORMATION</button>
                    <img src="../assets/img/new-corner.jpg" alt="">
                </div>
            </div>
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

button {
    background-color: $primary;
    border: none;
    padding: 0.5rem 1.75rem;
    border-radius: 2rem;
    font-weight: 600;
    color: $light;
}

.card {
    position: absolute;
    overflow: hidden;
    border-radius: 1rem;
    top: -130px;
    left: 0;


    img {
        max-width: 80px;
        position: absolute;
        top: 0;
        left: 0;
    }

    p {
        color: $gray-txt;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 600;
    }
}



</style>