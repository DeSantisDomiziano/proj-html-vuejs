<script>
export default {
    name: 'BehindWheel'
}
</script>
<template>

    <div class="container py-5 position-relative">
        <div class="row ">
            <div class="col">
                <h2>Get Behind The Wheel</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusamus fugiat eius temporibus consectetur ab earum amet aperiam voluptatem perferendis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas aut ullam recusandae quidem tempora voluptate doloribus quisquam, libero laborum ipsa assumenda ipsum minus voluptates necessitatibus, nam sapiente magni id itaque rerum fugiat cupiditate minima. Odio nam, exercitationem magnam in, molestias blanditiis iste ullam aut hic officia consectetur numquam voluptas voluptates deserunt dignissimos quisquam possimus.</p>
            </div>
            <div class="col">
                <div class="card text-center py-5 px-5" id="firstLesson">
                    <h2 class="pb-2">First Lesson Free!</h2>
                    <p class="pb-4">When you make a block booking with us your first lesson is included free.</p>
                    <form id="customer-data">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Yuor Name*" aria-label="Username" required>
                            <span class="input-group-text" id="basic-addon1">
                                <img src="../assets/img/image.png" alt="">
                            </span>
                        </div>
                        <input type="email" class="form-control mb-3" placeholder="Email*" required>
                        <input type="tel" class="form-control mb-3" placeholder="Telephone* format: 1-800-555-555" pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{3}" required>
                        <input type="text" class="form-control mb-3" placeholder="Location*" required>
                        <button type="submit" class="mt-3">REQUEST A CALLBACK</button>
                    </form>
                </div>
            </div>
            </div>
        </div>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#firstLesson {
    position: absolute;
    top: -50px;
}

.container {
    margin-bottom: 12rem;
}

h2 {
    font-weight: bold;
    color: #494c4e;
}

p {
    color: $gray-txt;
}
.card {
    box-shadow: 0px 30px 20px 0px #e8e8e8;

    h2 {
        color: $primary;
    }
}

input {
    background-color: $bg-input;
    border-bottom: 2px solid #ced4da;

}

span {
    background-color: $bg-input;
    border-bottom: 2px solid #ced4da;
}
.input-group {
    input {
        border-right: 0;
    }
}

button {
    padding: 0.35rem 1.25rem;
    background-color: $primary;
    border-radius: 1rem;
    border: none;
    font-weight: 700;
    color: $light;

    &:hover {
        background-color: $hover;
    }
}
</style>