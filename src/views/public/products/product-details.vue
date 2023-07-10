<template>
    <div class="products__details dashboard">
        <div class="navigation__header">
            <div class="container">
                <p><span>Mobiles > </span><span>Apple > </span><span>{{ productName }}</span></p>
                <p class="subtitle">Buy {{ productName }} price in pakistan</p>
            </div>

        </div>
        <ProductOverview v-if="product"
                         :product="product" />
        <ProductServices class="product__services" />
        <div class="navigation__header">
            <div class="links__container">
                <div class="links"
                     v-for="item in headerLinks"
                     :key="item.value">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <ProductFeaturesDetailsVue />
        <Faqs />
        <Footer />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { useRoute } from 'vue-router'
import ProductOverview from '@/components/products-components/product-overview.vue'
import { Product } from '@/models/product.model'
import ProductServices from '@/components/dashboard-components/product-services.vue'
import Footer from '@/components/footer.vue'
import ProductFeaturesDetailsVue from '@/components/products-components/product-features-details.vue'
import Faqs from '@/components/products-components/productFaqs/product-faqs.vue'

export default defineComponent({
    components: { ProductOverview, ProductServices, Footer, ProductFeaturesDetailsVue, Faqs },
    setup()
    {
        const productStore = useproductStore()
        const { getProductByName } = productStore
        const product = ref<Product>(new Product())

        const headerLinks = ref([
            { name: "Highlights", value: 'highlights' },
            { name: "Specifications", value: 'specifications' },
            { name: "Installment Plans", value: 'installmentplans' },
            { name: "Reviews", value: 'reviews' },
            { name: "FAQs", value: 'FAQs' },
        ])

        const route = useRoute()
        const productName = computed(() => route.params.productName.toString().split("-").join(" "))
        const setInitialState = async () =>
        {
            if (route.params.productName)
                product.value = await getProductByName(route.params.productName as string) as any

        }

        onMounted(() => setInitialState())
        return { route, productName, product, headerLinks }
    },
})
</script>
<style lang="scss" scoped>
@import '../../../assets/css/pages/dashboard';

.products__details {
    .navigation__header {
        background: #fff;
        padding: 16px;
        max-width: 100%;
        // margin-bottom: 16px;

        .container {
            // max-width: 124rem;
            display: flex;
            flex-direction: column;
            max-width: 124rem;
            margin: 0px auto;

            p {
                font-size: 1.2rem;
                color: rgba(7, 18, 27, .4);
                font-weight: 600;
            }

            .subtitle {
                font-size: 1.3rem;
                color: #202020;
                font-weight: 500;
            }
        }

        .links__container {
            @extend .container;
            flex-direction: row;
            padding: 16px 0px;
            // margin-bottom: 16px;

            .links {
                margin-right: 30px;
                font-size: 1.2rem;
                color: #000;
                font-weight: 500;
                cursor: pointer;
            }
        }
    }

    .product__services {
        padding: 0px;
        margin-bottom: 16px;

        :first-child {
            padding: 0px;
        }
    }
}
</style>
