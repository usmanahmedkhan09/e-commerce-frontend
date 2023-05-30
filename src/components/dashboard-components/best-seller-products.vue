<template>
    <div class="products__container">
        <div class="products__container--header">
            <h4>Best Seller</h4>
            <p>Get the best price in town</p>
        </div>
        <div class="products__container--content">
            <div class="product__box"
                 v-for="(product, index) in products"
                 :key="index">
                <div class=""
                     :class="index > 0 ? 'contentBox' : ''">
                    <h4 class="title">{{ product.name }}</h4>
                    <div class=""
                         :class="index > 0 ? 'image__box' : 'image__wrapper'">
                        <img :src="getBaseUrl() + product.productImages[0].path"
                             alt="">
                        <!-- <img src="@/assets/images/samsung-galaxy.webp"
                         alt=""> -->
                    </div>
                </div>
                <div class="detail__box">
                    <p class="actual__price">Rs. {{ product.price }}</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <!-- <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/x8-ultra-smartwatch.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/samsung-galaxy-a73.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/audionic-crystal-airbud.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/infinix-note.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useproductStore } from '@/stores/product.store'
import utilService from '@/services/util.service'

export default defineComponent({
    setup()
    {
        const { getBestSellingProducts } = useproductStore()

        const products = ref<any[]>([])

        const setInitialState = async () =>
        {
            products.value = await getBestSellingProducts()
        }

        onMounted(() => setInitialState())
        return { products, getBaseUrl: utilService.getBaseUrl }
    },
})
</script>
<style lang="scss" scoped></style>
