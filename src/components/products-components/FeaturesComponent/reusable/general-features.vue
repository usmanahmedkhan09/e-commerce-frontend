<template>
    <table class="productSpecTable">
        <thead class="productSpecTable__header">
            <tr>
                <th>General Features</th>
            </tr>
        </thead>
        <tbody class="productSpecTable__body">
            <tr>
                <th>Release Date</th>
                <td>{{ product.generalFeatures.releaseDate }}</td>
            </tr>
            <tr>
                <th>Sim Supports</th>
                <td>{{ product.generalFeatures.simSupport }}</td>
            </tr>
            <tr>
                <th>Phone Dimensions</th>
                <td> {{ product.generalFeatures.dimensions }}</td>
            </tr>
            <tr>
                <th>Phone Weight</th>
                <td>{{ product.generalFeatures.weight }}</td>
            </tr>
            <tr>
                <th>Operating System</th>
                <td>{{ product.generalFeatures.opertaingSystem }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
    setup()
    {
        const producStore = useproductStore()
        const product = computed(() => producStore.product)
        return { product }
    },
})
</script>
<style lang="scss" scoped>
.productSpecTable {
    border-radius: 4px;
    background-color: #fff;
    width: 400px;
    padding: 10px;
    border-spacing: 0;
    width: 100%;
    margin-bottom: 15px;

    &__header {
        text-align: left;

        tr th {
            color: #07121b;
            font-size: 1.3rem;
            font-weight: 500;
        }
    }

    &__body {

        th {
            border-bottom: 0.1rem solid #d7d9db;
            text-align: left;
            font-size: 1.2rem;
            color: gray;
            padding: 6px 0;
        }

        td {
            font-size: 1.2rem;
            border-bottom: 0.1rem solid #d7d9db;
            color: #07121b;
            font-weight: 500;
        }

        tr th :last-child {
            border-bottom: none;
        }

    }
}
</style>
