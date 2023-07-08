<template>
    <table class="productSpecTable">
        <thead class="productSpecTable__header">
            <tr>
                <th>Battery</th>
            </tr>
        </thead>
        <tbody class="productSpecTable__body">
            <tr>
                <th>Type</th>
                <td></td>
            </tr>
            <!-- <tr>
                <th>Sim Supports</th>
                <td></td>
            </tr>
            <tr>
                <th>Phone Dimensions</th>
                <td> </td>
            </tr>
            <tr>
                <th>Phone Weight</th>
                <td></td>
            </tr>
            <tr>
                <th>Operating System</th>
                <td></td>
            </tr> -->
        </tbody>
    </table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup()
    {
        return {}
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

    &__header {
        text-align: left;
        font-size: 1.2rem;
        font-weight: 600;
        color: #07121b;
    }

    &__body {
        tr {}

        th {
            border-bottom: 0.1rem solid #d7d9db;
            text-align: left;
            font-size: 1.3rem;
            color: gray;
            padding: 6px 0;

            &:not(:last-child) {
                border-bottom: unset;
            }
        }


    }
}
</style>
