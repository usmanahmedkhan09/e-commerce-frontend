<template>
    <div class="popular__list">
        <div class="popular__list__title">Popular Lists</div>
        <ul class="popular__list__content">
            <li v-for="item in populatItems"
                :key="item.name"
                class="item">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup()
    {
        const populatItems = ref([
            { name: 'Best Mobile under 10000', value: '' },
            { name: 'Best Mobile under 20000', value: '' },
            { name: 'Best Mobile under 30000', value: '' },
            { name: 'Best Mobile under 40000', value: '' },
            { name: 'Best Mobile under 50000', value: '' },
            { name: 'Best Mobile under 60000', value: '' },
            { name: 'Best Mobile under 80000', value: '' },
            { name: 'Best Mobile under 100000', value: '' },
            { name: 'Best 5G phones', value: '' },
            { name: 'Best Camera Phones', value: '' },
            { name: 'Best Selfie Camera Phones', value: '' },
            { name: 'Best PUBG Phones', value: '' },
            { name: 'Most Expensive Phones', value: '' },
            { name: 'Top 10 Fast Charging Mobiles', value: '' },
            { name: 'Best Mobiles of 2023', value: '' },
        ])
        return { populatItems }
    },
})
</script>
<style lang="scss" scoped>
.popular__list {
    margin-top: 64px;

    &__title {
        color: #748a98;
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    &__content {
        .item {
            border-radius: 4px;
            border: solid 1px #bababa;
            background-color: #fff;
            color: #606060;
            font-weight: 400;
            margin-bottom: 1rem;
            padding: 1rem 1rem;
            font-size: 1.4rem;
            max-width: 90%;

            &:hover {
                background-color: var(--color-primary-blue);
                color: white
            }
        }
    }

}
</style>
