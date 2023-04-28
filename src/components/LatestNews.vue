<script>
    export default {
        
    }
</script>
<template>

    <div class="container text-center">
        <div class="card p-5">
            <h2 class="mb-5">Latest News</h2>
            <img src="../assets/img/latestnews/latestnews-bottom.png" alt="">
            <div class="row row-cols-2">
                <div class="col">
                    <a href="#">
                        <img src="../assets/img/blog/blog-choosecar-700x441.jpg" alt="">
                        <h4 class="mt-4">What Car to Start With?</h4>
                        <p>February 7th. 2019 |
                            <span>0 Comments</span>
                        </p>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                    </a>
                </div>
                <div class="col">
                    <a href="#">
                        <img src="../assets/img/blog/blogpost-10and2-700x441.jpg" alt="">
                        <h4 class="mt-4">Avada Driving School Expanind</h4>
                        <p>February 7th. 2019 |
                            <span>0 Comments</span>
                        </p>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                    </a>
                </div>
            </div>
            <button class="text-uppercase mt-5">more from the blog</button>
        </div>
    </div>
        
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.container {
    padding-bottom: 6.5rem;
}
.card {

    border-bottom: none;
    border-top: 9px solid $details;
    border-radius: 1rem 1rem 0.25rem 0.25rem;
    position: relative;
    left: 0;
    top: -50px;

    button {
        display: inline-block;
        align-self: center;
        border: none;
        padding: 0.5rem 2.5rem;
        border-radius: 1.5rem;
        background-color: $primary;
        color: $light;
        font-weight: 600;

        &:hover {
            background-color: $hover;
        }
    }
}

a {
    color: inherit; 
    text-decoration: inherit; 
}

span, h4 {
    color: $primary;
}

h4, h2 {
    font-weight: 700;
}

h2 {
    font-size: 3rem;
    color: $dark;
}
.card > img {
    position: absolute;
    bottom: -112px;
    left: 0;
    height: 112px;
}
</style>