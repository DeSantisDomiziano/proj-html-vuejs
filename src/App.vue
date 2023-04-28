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

    <div class="badge-container">
        <div class="badge_demos">
            <f-a-icon icon="fa-solid fa-mountain" size="xl"/>
            <span>Demos</span>
        </div>
        <div class="badge_sale position-relative">
            <p class="m-0">39</p>
            <p class="m-0 dollar">$</p>
            <span>On Sale</span>
        </div>
    </div>

    <div class="arrow-up position-fixed p-2 px-4">
        <f-a-icon icon="fa-solid fa-angle-up" />
    </div>
    <SiteHeader/>
    <SiteMain/>
    <SiteFooter/> 
    
        
</div>
</template>

<style lang="scss" scoped>

@use './assets/scss/partials/variables' as *;
.arrow-up {
    z-index: 100;
    bottom: 0;
    position: fixed;
    right: 10px;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: $dark-opacity;
}

.badge-container {
    position: fixed;
    right: 10PX;
    top: 120px;
    z-index: 100;
}

.badge_demos, 
.badge_sale {
    background-color: $light;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 8px 0px $dark;

    span {
        display: block;
        font-size: 0.7rem;
    }
}

.badge_sale {
    p {
        color: $primary;
        font-size: 1.3rem;
        font-weight: 700;
    }

    .dollar {
        position: absolute;
        font-size: 0.8rem;
        top: 2px;
        left: 8px;
    }
}

#chief {
    overflow-x: hidden;
}

</style>
