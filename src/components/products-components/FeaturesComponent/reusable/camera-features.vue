<template>
    <table class="productSpecTable">
        <thead class="productSpecTable__header">
            <tr>
                <th>Camera</th>
            </tr>
        </thead>
        <tbody class="productSpecTable__body">
            <tr>
                <th>Front Camera</th>
                <td>{{ product.camera.frontCamera ?? 'N/A' }}</td>
            </tr>
            <tr>
                <th>Front Flash Light</th>
                <td>{{ product.camera.frontflashlight ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
                <th>Front Video Recording</th>
                <td>{{ product.camera.frontvideorecording }}</td>
            </tr>
            <tr>
                <th>Back Flash Light</th>
                <td> {{ product.camera.frontflashlight ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
                <th>Back Camera</th>
                <td>{{ product.camera.backCamera }}</td>
            </tr>
            <tr>
                <th>Back Video Recording</th>
                <td>{{ product.camera.backvideorecording }}</td>
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

        const categoryName = computed(() => product.value.category!.name)
        return { product, categoryName }
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
            width: 50%
        }

        td {
            font-size: 1.2rem;
            border-bottom: 0.1rem solid #d7d9db;
            color: #07121b;
            font-weight: 500;
            width: 50%
        }

        tr th :last-child {
            border-bottom: none;
        }

    }
}
</style>
