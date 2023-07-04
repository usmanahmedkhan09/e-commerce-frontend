<template>
    <div class="products__details">
        <div class="navigation__header">
            <p><span>Mobiles > </span><span>Apple > </span><span>{{ productName }}</span></p>
            <p class="subtitle">Buy {{ productName }} price in pakistan</p>
        </div>
        <ProductOverview />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { useRoute } from 'vue-router'
import ProductOverview from '@/components/products-components/product-overview.vue'

export default defineComponent({
    components: { ProductOverview },
    setup()
    {
        const productStore = useproductStore()
        const { getProductByName } = productStore

        const route = useRoute()
        const productName = computed(() => route.params.productName.toString().split("-").join(" "))
        const setInitialState = async () =>
        {
            if (route.params.productName)
                await getProductByName(route.params.productName as string)

        }

        onMounted(() => setInitialState())
        return { route, productName }
    },
})
</script>
<style lang="scss" scoped>
.products__details {
    .navigation__header {
        background: #fff;
        padding: 16px;
        max-width: 100%;

        p {
            font-size: 1.2rem;
            color: rgba(7, 18, 27, .4);
            font-weight: 600;
            padding-left: 24rem;
        }

        .subtitle {
            font-size: 1.3rem;
            color: #202020;
            font-weight: 500;
        }
    }
}
</style>
