<template>
    <div class="shop__filters">
        <div class="shop__filters--header">
            <h1 class="title">Shop By price</h1>
            <a href="#">View all</a>
        </div>
        <div class="shop__filters--content">
            <a class="shop__filters--content--item"
               v-for="item in filters"
               :key="item.value">
                {{ item.name }}
                <!-- <span>
                </span> -->
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup()
    {
        const filters = ref([
            { name: 'Below Rs. 10,000', value: "10,000" },
            { name: 'Rs. 10,000 - Rs. 20,000', value: "10,000 20,000" },
            { name: 'Rs. 20,000 - Rs. 30,000', value: "20,000 30,000" },
            { name: 'Rs. 30,000 - Rs. 40,000', value: "30,000 40,000" },
            { name: 'Rs. 40,000 - Rs. 50,000', value: "40,000 50,000" },
            { name: 'Rs. 50,000 - Rs. 60,000', value: "50,000 60,000" },
            { name: 'Rs. 60,000 - Rs. 70,000', value: "60,000 70,000" },
            { name: 'Rs. 70,000 - Rs. 80,000', value: "70,000 80,000" },

        ])

        return {
            filters
        }
    },
})
</script>

<style scoped lang="scss"></style>