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

    <section id="top">
        <BottomFooter/>
    </section>
</template>


<style lang="scss" scoped>
#top {
    background-image: url('../assets/img/footer/footer-background-color.jpg');
    background-size: cover;
}
</style>