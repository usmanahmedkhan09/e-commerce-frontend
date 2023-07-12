<template>
    <div class="specifications">
        <section class="product__features">
            <div class="product__features__container">
                <div class="card__Wrapper">
                    <div class="productFeatures__card"
                         v-for="item in features"
                         :key="item.image">
                        <div class="image__wrapper">
                            <img :src="getImageByName(item.image)"
                                 alt="">
                        </div>
                        <p class="productFeatures__card--subTitle">{{ item.value }}</p>
                        <h4 class="productFeatures__card--title">{{ item.name }}</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="column__one">
                <generalFeatures />
                <displayFeaturesVue />
                <memoryFeaturesVue />
                <Performance v-if="product.category && product.category.name.toLowerCase() != 'smart watches'" />
            </div>
            <div class="column__two">
                <batteryFeatures />
                <cameraFeaturesVue v-if="product.category && product.category.name.toLowerCase() != 'smart watches'" />
                <connectivityFeaturesVue />
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import utilService from '@/services/util.service'
import generalFeatures from './reusable/general-features.vue'
import batteryFeatures from './reusable/battery-features.vue'
import displayFeaturesVue from './reusable/display-features.vue'
import memoryFeaturesVue from './reusable/memory-features.vue'
import Performance from './reusable/performance-features.vue'
import cameraFeaturesVue from './reusable/camera-features.vue'
import connectivityFeaturesVue from './reusable/connectivity-features.vue'
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
    components: { generalFeatures, batteryFeatures, displayFeaturesVue, memoryFeaturesVue, Performance, cameraFeaturesVue, connectivityFeaturesVue },
    setup()
    {
        const productStore = useproductStore()
        const product = computed<any>(() => productStore.product)
        const features = ref([
            { image: 'display.svg', name: 'Display', apiValue: 'size', value: '6.52 inches' },
            { image: 'ram.svg', name: 'Ram', apiValue: 'ram', value: '2/3 GB' },
            { image: 'battery.svg', name: 'Battery', apiValue: 'type', value: '5000 mAh' },
            { image: 'backcamera.svg', name: 'Back Camera', apiValue: 'backCamera', value: '8 MP + 0.08 MP (QVGA)' },
        ])

        const laptopfeatures = ref([
            { image: 'screensize2.svg', name: 'Display', apiValue: 'size', value: '13.3 inches' },
            { image: 'generation.svg', name: 'Ram', apiValue: '', value: '2/3 GB' },
            { image: 'processor.svg', name: 'Battery', apiValue: '', value: '5000 mAh' },
            { image: 'ram.svg', name: 'Back Camera', apiValue: '', value: '8 MP + 0.08 MP (QVGA)' },
        ])

        watch(() => product.value, () => setInitialState(), { deep: true })
        const setInitialState = () =>
        {
            if (product.value)
            {
                features.value.map((x: any) =>
                {
                    if (x.apiValue == 'size')
                        x.value = product.value.display.size
                    if (x.apiValue == 'ram')
                        x.value = product.value.memory.ram
                    if (x.apiValue == 'type')
                        x.value = product.value.battery.type
                    if (x.apiValue == 'backCamera')
                        x.value = product.value.camera.backCamera
                    return x
                })
            }
        }

        const getImageByName = (name: any) => utilService.getImageUrl(name, 'svg')

        onMounted(() => setInitialState())
        return { getImageByName, features, product, laptopfeatures }
    },
})
</script>
<style lang="scss" scoped>
.specifications {
    .product__features {
        // padding: 60px 0 15px;

        &__container {
            // padding: 30px 0;
            background-color: #fff;
            overflow: hidden;
            margin-top: 16px;

            .card__Wrapper {
                max-width: 65%;
                margin: 32px auto;
                display: flex;
                justify-content: space-between;

                // @include media('<=desktop') {
                //     margin: unset;
                //     max-width: unset;
                //     padding: 0px 16px;
                //     flex-wrap: wrap;
                // }

                .productFeatures__card {
                    text-align: center;

                    // @include media('<=tablet') {
                    //     flex: calc(100% / 2);
                    //     margin-top: 16px;
                    // }

                    // @include media('<=phone') {
                    //     flex: 0 0 100%;
                    //     margin-top: 16px;
                    // }

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
                        font-size: 1.2rem;
                        // font-weight: 500;
                        color: #909090;
                    }

                    &--subTitle {
                        font-size: 1.2rem;
                        color: #000;
                        font-weight: 500;
                    }
                }
            }
        }
    }

    .content {
        padding: 16px 0px;
        max-width: 50%;
        margin: 32px 34rem;
        display: flex;
        gap: 10px;

        .column__one {
            flex: calc(100% / 2 - 10px)
        }

        .column__two {
            flex: calc(100% / 2 - 10px)
        }
    }
}
</style>
