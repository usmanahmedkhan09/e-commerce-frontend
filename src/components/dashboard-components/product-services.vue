<template>
    <section class="product__services">
        <div class="product__services__container">
            <div class="card__Wrapper">
                <div class="productService__card"
                     v-for="item in services"
                     :key="item.image">
                    <div class="image__wrapper">
                        <img :src="getImageByName(item.image)"
                             alt="">
                    </div>
                    <h4 class="productService__card--title">{{ item.name }}</h4>
                    <p class="productService__card--subTitle">{{ item.value }}</p>
                </div>
            </div>

        </div>

    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service'

export default defineComponent({
    setup()
    {
        const services = ref([
            { image: 'feature-approved.svg', name: 'PTA Approved', value: 'Mobile Phone' },
            { image: 'feature-warranty.svg', name: '1 Year', value: 'Brand Warranty' },
            { image: 'feature-shipping.svg', name: '24hr delivery', value: 'ISB & RWP' },
            { image: 'feature-delivery.svg', name: 'Free delivery', value: 'All Over Pakistan' },
        ])

        const getImageByName = (name: any) =>
        {
            return utilService.getImageUrl(name, 'svg')
        }

        return {
            services,
            getImageByName
        }
    },
})
</script>

<style lang="scss" scoped>
.product__services {
    padding: 60px 0 15px;

    &__container {
        padding: 30px 0;
        background-color: #fff;
        overflow: hidden;

        .card__Wrapper {
            max-width: 60%;
            margin: 32px auto;
            display: flex;
            justify-content: space-between;

            .productService__card {
                text-align: center;

                .image__wrapper {
                    width: 70px;
                    height: 70px;
                    margin: 0 auto 10px;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                &--title {
                    font-size: 1.4rem;
                    font-weight: 500;
                }

                &--subTitle {
                    font-size: 1.3rem;
                    color: rgba(7, 18, 27, .6);
                }
            }

        }
    }
}
</style>