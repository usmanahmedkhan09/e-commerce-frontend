<template>
    <div class="products__container">
        <div class="products__container--header">
            <h4>Best Seller</h4>
            <p>Get the best price in town</p>
        </div>
        <div class="products__container--content">
            <div class="product__box">
                <h4 class="title">Sumsung Galaxy A13</h4>
                <div class="image__wrapper">
                    <img src="@/assets/images/samsung-galaxy.webp"
                         alt="">
                </div>
                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/x8-ultra-smartwatch.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/samsung-galaxy-a73.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/audionic-crystal-airbud.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
            <div class="product__box">
                <div class="contentBox">
                    <h4 class="title">X8 Ultra Bluetooth calling watch</h4>
                    <div class="image__box">
                        <img src="@/assets/images/infinix-note.webp"
                             alt="">
                    </div>
                </div>

                <div class="detail__box">
                    <p class="actual__price">Rs. 51,999</p>
                    <div class="price__diff">
                        <p class="price__diff--retail">Rs. 57,999</p>
                        <p class="price__diff--saving">(10% OFF)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
.products__container {
    max-width: 60%;
    margin: 32px auto;

    &--header {
        text-align: center;
        margin: 60px 0 30px;

        h4 {
            font-weight: 600;
            font-size: 1.8rem;
            color: #404040;
        }
    }

    &--content {
        display: grid;
        gap: 15px;
        grid-template-columns: 41% 28% 28%;

        .product__box {
            background-color: white;
            padding: 24px;
            border-radius: 10px;

            &:first-child {
                grid-column: 1;
                grid-row: 1 / span 2;
            }

            .title {
                margin-bottom: 30px;
                font-size: 1.4rem;
                margin-bottom: 24px;
            }

            .image__wrapper {
                height: 360px;
                width: 342px;
                margin: 0px auto;
            }

            .detail__box {
                &:first-child {
                    margin-top: 30px;
                }

                .actual__price {
                    font-size: 1.4rem;
                }

                .price__diff {
                    display: flex;
                    gap: 10px;

                    p {
                        font-size: 1.2rem;
                    }

                    &--retail {
                        text-decoration: line-through;
                        text-decoration-color: red;
                        color: rgba(7, 18, 27, .4);
                    }

                    &--saving {
                        color: #0bb07e
                    }
                }
            }

            .contentBox {
                display: flex;

                .title {
                    font-size: 1.4rem;
                }

                .image__box {
                    width: 170px;
                    height: 160px;
                }
            }
        }
    }
}
</style>
