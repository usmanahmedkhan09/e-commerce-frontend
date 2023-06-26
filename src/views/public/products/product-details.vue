<template>
    <div>product detail</div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { useRoute } from 'vue-router'

export default defineComponent({
    setup()
    {
        const productStore = useproductStore()
        const { getProductByName } = productStore

        const route = useRoute()
        const setInitialState = async () =>
        {
            if (route.params.productName)
                await getProductByName(route.params.productName as string)

        }

        onMounted(() => setInitialState())
        return {}
    },
})
</script>
