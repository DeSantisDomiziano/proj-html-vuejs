<script>
export default {
    name: 'BottomFooter',
    data() {
        return {
            socials: [ 'fa-facebook-f', 'fa-twitter', 'fa-instagram', 'fa-youtube'],
        }
    }
}
</script>

<template>
    <div class="container py-5">
        <div class="row justify-content-between my-4">
            <div class="col-auto">
                <p class="m-0">
                    &copy; Copyright 2012 - 2020 | Avada Theme by 
                    <a href="#" id="copy">ThemeFusion </a>
                    | All Rights Reserved | Powered by 
                    <a href="#"> me</a>
                </p>
            </div>
            <div class="col-auto d-flex">
                <a href="#" class="icon mx-2" v-for="social in socials">
                    <f-a-icon :icon="`fa-brands ${social}`" />
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.container {
    color: $smoke-white
}

#copy {
    text-decoration: none;
    color: $primary
}

a {
    color: inherit
}

</style>