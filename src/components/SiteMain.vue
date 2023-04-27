<script>
import BehindWheel from './BehindWheel.vue'
import StartLearning from './StartLearning.vue'
import CoursesAvada from './CoursesAvada.vue'

export default {
    name: 'SiteMain',   
    components: {
        BehindWheel,
        StartLearning,
        CoursesAvada
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

    <section id="Courses">
        <CoursesAvada/>
    </section>
    
</template>


<style lang="scss" scoped>


#StartLearning {
    background-image: url('../assets/img/bg/horizontal-cta-background.jpg');
    background-size: cover;
}

#Courses {
    background-image: url('../assets/img/bg/promise-background.jpg');
    background-size: cover;
    background-position: bottom;
    height: 60vh;
    margin-bottom: 9rem;
    position: relative;
}
</style>