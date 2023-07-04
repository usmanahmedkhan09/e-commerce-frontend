<template>
    <div class="latest__products">
        <div class="latest__products--header">
            <h1 class="title">latest {{ title }}</h1>
            <a href="#">View all</a>
        </div>
        <div class="latest__products--content">
            <template v-if="products.length > 0">
                <div class="product__card"
                     v-for="item in products"
                     :key="item">
                    <div class="image__wrapper">
                        <img :src="getBaseUrl() + item.productImages[0].path"
                             alt="">
                    </div>
                    <p class="product__name">{{ item.name }}</p>
                    <p class="product__price">Rs. {{ item.price }}</p>
                    <p class="discounted__price"><span>Rs.1,249</span> (8% OFF)</p>
                </div>
            </template>
            <template v-else>
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
            </template>

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useproductStore } from '@/stores/product.store'
import utilService from '@/services/util.service'

export default defineComponent({
    props: ["title"],
    setup(props)
    {
        const productStore = useproductStore()
        const products = ref<any>([])
        const { getProductByCategoryName } = productStore

        onMounted(async () =>
        {
            let response = await getProductByCategoryName(props.title.toLowerCase())
            if (response)
                products.value = [...response.slice(0, 8)]
        })
        return { products, getBaseUrl: utilService.getBaseUrl }
    },
})
</script>
<style scoped lang="scss"></style>
