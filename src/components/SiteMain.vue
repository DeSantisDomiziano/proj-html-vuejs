<script>
import BehindWheel from './BehindWheel.vue'
import StartLearning from './StartLearning.vue'
import CoursesAvada from './CoursesAvada.vue'
import PercentageRate from './PercentageRate.vue'
import OurIstructos from './OurIstructos.vue'
import TestimonialsAvada from './TestimonialsAvada.vue'
import LatestNews from './LatestNews.vue'

export default {
    name: 'SiteMain',   
    components: {
        BehindWheel,
        StartLearning,
        CoursesAvada,
        PercentageRate,
        OurIstructos,
        TestimonialsAvada,
        LatestNews
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

    <section id="Percentage">
        <PercentageRate/>
    </section>

    <section id="Istructors">
        <OurIstructos/>
    </section>

    <section id="Testimonials">
        <TestimonialsAvada/>
    </section>

    <section id="LatestNews">
        <LatestNews/>
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
    position: relative;
}

#Testimonials {
    background-image: url('../assets/img/bg/testimonial-background.jpg');
    background-position: center;
    background-size: cover;
}

#LatestNews  {
    background-image: url('../assets/img/latestnews/latestnews-background.jpg');
    background-position: center;
    background-size: cover;
}
</style>