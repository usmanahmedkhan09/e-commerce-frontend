<template>
    <table class="productSpecTable">
        <thead class="productSpecTable__header">
            <tr>
                <th>Connectivity</th>
            </tr>
        </thead>
        <tbody class="productSpecTable__body">
            <tr>
                <th>Bluetooth</th>
                <td></td>
            </tr>
            <tr>
                <th>3G</th>
                <td></td>
            </tr>
            <tr>
                <th>4G/LTE</th>
                <td></td>
            </tr>
            <tr>
                <th>5G</th>
                <td></td>
            </tr>
            <tr>
                <th>Radio</th>
                <td></td>
            </tr>
            <tr>
                <th>Wifi</th>
                <td></td>
            </tr>
            <tr>
                <th>NFC</th>
                <td></td>
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
