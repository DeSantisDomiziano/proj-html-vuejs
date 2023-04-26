<script>
    import InfoJumbo from './InfoJumbo.vue'
    import NavJumbo from './NavJumbo.vue'

    export default {
        name: 'SiteHeader',
        components: {
            InfoJumbo,
            NavJumbo,
        }
    }
</script>


<template>

    <section id="jumbo">

        <div id="info">
            <InfoJumbo/>
        </div>

        <div id="nav-bar">
            <NavJumbo/>
        </div>

        <div id="slogan">
            <div class="container my-5 py-5">
                <h1 class="py-3 fw-semibold">Drive with Avada</h1>
                <h3 class="fw-light">We offer the finest driving tuition money can buy</h3>
            </div>
        </div>


    </section>
    
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#jumbo {
    background-image: url('../assets/img/bg/homepage-hero-background.jpg');
    height: 65vh;
    background-size: cover;

    #info {
        background-color: $dark;
        color: $gray;
        font-size: small;
    }

    #nav-bar {
        background-color: $dark-opacity;
        color: $light;
    }

    #slogan {
        color: $light;
        position: relative;
        left: 0;
        top: 210px;

        h1 {
            font-size: 4.25rem;
        }
    }
}
</style>