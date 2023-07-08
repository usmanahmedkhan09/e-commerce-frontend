<template>
    <div class="products__details">
        <div class="navigation__header">
            <div class="container">
                <p><span>Mobiles > </span><span>Apple > </span><span>{{ productName }}</span></p>
                <p class="subtitle">Buy {{ productName }} price in pakistan</p>
            </div>

        </div>
        <ProductOverview v-if="product"
                         :product="product" />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { useRoute } from 'vue-router'
import ProductOverview from '@/components/products-components/product-overview.vue'
import { Product } from '@/models/product.model'

export default defineComponent({
    components: { ProductOverview },
    setup()
    {
        const productStore = useproductStore()
        const { getProductByName } = productStore
        const product = ref<Product>(new Product())

        const route = useRoute()
        const productName = computed(() => route.params.productName.toString().split("-").join(" "))
        const setInitialState = async () =>
        {
            if (route.params.productName)
                product.value = await getProductByName(route.params.productName as string) as any

        }

        onMounted(() => setInitialState())
        return { route, productName, product }
    },
})
</script>
<style lang="scss" scoped>
.products__details {
    .navigation__header {
        background: #fff;
        padding: 16px;
        max-width: 100%;

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
    }
}
</style>
