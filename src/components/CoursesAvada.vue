<script>
import CourseInfo from './CourseInfo.vue'
export default {
    name: 'CoursesAvada',
    components: {
        CourseInfo,
    }
}
</script>
<template>
    
        <img src="../assets/img/latestnews/latestnews-bottom.png" alt="" id="uno">
        <img src="../assets/img/latestnews/latestnews-bottom.png" alt="" id="due">

    <section id="course-info">
        <CourseInfo/>
    </section>

</template>


<style lang="scss" scoped>
img {
    width: 100%;
}

.triangle {
    position: relative;
    transform: rotate(180deg);

}

#uno,
#due {
    position: absolute;
    bottom: 0;
    transform: rotate(180deg);
}

#uno {
    right: 50%;
}

#due {
    left: 50%;
}

</style>