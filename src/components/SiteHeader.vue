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
}

</style>