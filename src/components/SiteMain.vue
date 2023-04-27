<script>
import BehindWheel from './BehindWheel.vue'
import StartLearning from './StartLearning.vue'

export default {
    name: 'SiteMain',   
    components: {
        BehindWheel,
        StartLearning
    }
}
</script>

<template>

    <section>
        <BehindWheel/>
    </section>

    <section id="StartLearning">
        <StartLearning/>
    </section>
    
</template>


<style lang="scss" scoped>
section {
    margin-bottom: 10rem;
}

#StartLearning {
    background-image: url('../assets/img/bg/horizontal-cta-background.jpg');
    background-size: cover;
}

</style>