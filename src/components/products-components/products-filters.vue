<template>
    <div>
        <Accordian :title="'Sorting'">
            <div class="wrapper">
                <label class="checkbox__lable"
                       for="popularity">
                    <input type="checkbox"
                           id="popularity"
                           class="checkbox">
                    Popularity</label>
                <label class="checkbox__lable"
                       for="prc">
                    <input type="checkbox"
                           id="prc"
                           :true-value="1"
                           v-model="productStore.filters.sort"
                           class="checkbox">
                    Price (Low To High)</label>
                <label class="checkbox__lable"
                       for="price">
                    <input type="checkbox"
                           id="price"
                           :true-value="-1"
                           v-model="productStore.filters.sort"
                           class="checkbox">
                    Price (High To Low)</label>
            </div>
        </Accordian>
        <Accordian :title="'Brands'">
            <div class="wrapper">
                <label class="checkbox__lable"
                       v-for="brand in brands"
                       :for="brand.name"
                       :key="brand.name">
                    <input type="checkbox"
                           :id="brand.name"
                           :value="brand.name"
                           v-model="productStore.filters.brand"
                           class="checkbox" />
                    {{ brand.name }}</label>
            </div>
        </Accordian>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue'
import Accordian from '../accordian.vue';
import { useBrandStore } from '@/stores/brand.store'
import { useproductStore } from '@/stores/product.store'
import { useRoute } from 'vue-router'

export default defineComponent({
    components: { Accordian },
    setup()
    {
        const brandStore = useBrandStore()
        const { getBrandsByCategoryName } = brandStore

        const productStore = useproductStore()
        const { getProductByCategoryName } = productStore

        const route = useRoute()
        const brands = computed(() => brandStore.get)

        watch(() => route.params.category, () => setInitialState())
        const setInitialState = async () =>
        {
            await getBrandsByCategoryName(route.params.category as string)
        }

        onMounted(() => setInitialState())
        return { brands, productStore }
    },
})
</script>
<style lang="scss" scoped>
.products__filters {}

.wrapper {
    margin: 16px 0px;

    .checkbox__lable {
        display: flex;
        align-items: center;
        font-weight: normal !important;

        .checkbox {
            margin-right: 8px;
            margin-bottom: unset;
        }
    }
}
</style>
