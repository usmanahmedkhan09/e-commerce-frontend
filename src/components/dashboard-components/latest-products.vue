<template>
    <div class="latest__products">
        <div class="latest__products--header">
            <h1 class="title">latest {{ title }}</h1>
            <a href="#">View all</a>
        </div>
        <div class="latest__products--content">
            <div class="product__card"
                 v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
                 :key="item">
                <div class="image__wrapper">
                    <img src="@/assets/images/earbuds.webp"
                         alt="">
                </div>
                <p class="product__name">M10 tws wireless blooth</p>
                <p class="product__price">Rs.1,249</p>
                <p class="discounted__price"><span>Rs.1,249</span> (8% OFF)</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: ["title"],
    setup()
    {
        return {}
    },
})
</script>
<style scoped lang="scss">
.latest__products {
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
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;

        .product__card {
            flex: calc(100% / 4 - 32px);
            background-color: white;
            padding: 16px;
            width: 250px;
            border-radius: 4px;

            .image__wrapper {
                width: 120px;
                height: 120px;
                margin: 16px auto;

                img {
                    margin: auto;
                }
            }

            .product__name {
                color: #404040;
                white-space: pre-line;
                font-size: 1.3rem;
                margin-bottom: 0;
                overflow: hidden;
                font-weight: 500;
            }

            .discounted__price {
                color: var(--color-grey);
                font-size: 1.2rem;

                span {
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>
