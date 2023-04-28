<script>
export default {
    name: 'NewsLetter'
}
</script>
<template>
    <div class="container text-center">
        <h2 class="py-5">Sign up to our Newsletter</h2>
        <form>
            <input type="email" name="" id="" class="w-50 d-block mb-4">
            <button type="submit" class="w-50 mb-5 text-uppercase">subcribe</button>
            <p class="m-0 pb-5">(We do not share your data with anybody, and only use it for its intended purpose)</p>
        </form>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
input {
    margin: auto;
    font-size: 1.3rem;
}

button {
    border: none;
    background-color: $primary;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    color: $light;
    border-radius: 2rem;

    &:hover {
        background-color: $hover;
    }
}

p {
    color: $dark;
}

h2 {
    font-size: 2rem;
    font-weight: 700;
    color: $dark;
}
</style>