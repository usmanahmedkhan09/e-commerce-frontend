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

<style scoped lang="scss">
.shop__filters {
    max-width: 60%;
    margin: 32px auto;

    &--header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        .title {
            color: #404040;
            font-size: 1.8rem;
            text-transform: capitalize;
        }

        a {
            color: var(--color-primary-blue);
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: capitalize;
        }
    }

    &--content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;

        &--item {
            flex: calc(100% / 4 - 32px);
            width: 25%;
            text-align: center;
            background: radial-gradient(50% 50% at 50% 50%, #FFF348 0%, #FFF348 100%);
            font-weight: 400;
            padding: 16px;
            border-radius: 12px;
            position: relative;
            color: #404040;
            font-size: 1.3rem;
            z-index: 22;

            &:hover {
                color: #fff;
                transition: .4s ease-in;

                &::before {
                    transform: scaleY(1) !important;
                }

            }

            &::before {
                content: "";
                position: absolute;
                background: #48afff;
                width: 100%;
                height: 100%;
                z-index: -1;
                left: 0;
                top: 0;
                border-radius: 12px;
                transform-origin: 0 bottom 0;
                transform: scaleY(0);
                transition: .4s ease-out;
            }
        }
    }
}
</style>