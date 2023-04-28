<script>

    import SiteHeader from './components/SiteHeader.vue'
    import SiteMain from './components/SiteMain.vue'
    import SiteFooter from './components/SiteFooter.vue'

    export default {
        components: {
            SiteHeader,
            SiteMain,
            SiteFooter
        }
    }

</script>

<template>
<div id="chief">
    <SiteHeader/>
    <SiteMain/>
    <SiteFooter/> 
    
        
</div>
</template>

<style>

#chief {
    overflow-x: hidden;
}

</style>
