<template>
    <table class="productSpecTable">
        <thead class="productSpecTable__header">
            <tr>
                <th>Memory</th>
            </tr>
        </thead>
        <tbody class="productSpecTable__body">
            <tr>
                <th>Internal Memory</th>
                <td></td>
            </tr>
            <tr>
                <th>RAM</th>
                <td></td>
            </tr>
            <tr>
                <th>Card Slot</th>
                <td> </td>
            </tr>
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
    margin-bottom: 15px;

    &__header {
        text-align: left;
        font-size: 1.2rem;
        font-weight: 600;
        color: #07121b;
    }

    &__body {

        th {
            border-bottom: 0.1rem solid #d7d9db;
            text-align: left;
            font-size: 1.3rem;
            color: gray;
            padding: 6px 0;
        }

        tr th :last-child {
            border-bottom: none;
        }

    }
}
</style>
