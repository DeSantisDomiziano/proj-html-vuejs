<script>
    export default {
        name: 'SiteHeader'
    }
</script>


<template>

    <section id="jumbo">
        <div id="info">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <p class="m-0 py-2">We have a 95% Successful Pass Rate!</p>
                    </div>
                    <div class="col-auto">
                        <p class="m-0 py-2">
                            <f-a-icon icon="fa-solid fa-phone" flip="horizontal"/>
                            <span class="px-1"></span>
                            Give us a call to book your tuition! 1-800-555-555
                        </p>
                    </div>
                </div>
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
        color: $light;
        font-size: small;
    }
}

</style>