<script>
import TopFooter from './TopFooter.vue'
import BottomFooter from './BottomFooter.vue'

export default {
    name: 'SiteFooter',
    components: {
        TopFooter,
        BottomFooter
    }
}
</script>

<template>
    <section id="top">
        <TopFooter/>
    </section>

    <section id="bottom">
        <BottomFooter/>
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
#top {
    background-image: url('../assets/img/footer/footer-background-color.jpg');
    background-size: cover;
}

#bottom {

    background-color: $darker;
}
</style>