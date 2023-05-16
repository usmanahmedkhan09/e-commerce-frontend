<template>
    <div class="latest__products">
        <div class="latest__products--header">
            <h1 class="title">latest {{ title }}</h1>
            <a href="#">View all</a>
        </div>
        <div class="latest__products--content">
            <div class="product__card"
                 v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
                 :key="item">
                <div class="image__wrapper">
                    <img src="@/assets/images/earbuds.webp"
                         alt="">
                </div>
                <p class="product__name">M10 tws wireless blooth</p>
                <p class="product__price">Rs.1,249</p>
                <p class="discounted__price"><span>Rs.1,249</span> (8% OFF)</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ["title"],
    setup()
    {
        return {}
    },
})
</script>
<style scoped lang="scss"></style>
