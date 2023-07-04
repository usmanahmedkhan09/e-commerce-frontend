<template>
    <div class="overview__conatiner">
        <div class="images__container"></div>
        <div class="product__details">
            <h1 class="title">Apple iPhone 11</h1>
            <div class="ratings">
                <span>5.0</span>
                <div class="image__wrapper">
                    <img v-for="item in 5"
                         :key="item"
                         :src="getImageUrl('stars.svg', 'svg')"
                         alt="">
                </div>
                <span>128 Ratings</span>
            </div>
            <div class="ratings">
                <img :src="getImageUrl('po-approved.svg', 'svg')"
                     alt=""
                     height="20">
                <span class="approved">PriceOye Assured</span>
            </div>
            <div class="price__container">
                <div>
                    <p class="title">Priceoye Price</p>
                    <p class="price">Rs.207,999</p>
                </div>
                <div>
                    <p class="title">Availability</p>
                    <p class="price">Out Of Stock</p>
                </div>
            </div>
            <div class="colors__container">
                <p class="title">Colors</p>
                <div class="box__wrapper">
                    <div class="image__box"
                         v-for="item in 6"
                         :class="{ 'active': item == 3 }"
                         :key="item"></div>
                </div>

            </div>
            <div class="colors__container">
                <p class="title">Storage</p>
                <div class="box__wrapper">
                    <div class="image__box"
                         v-for="item in [32, 64, 128]"
                         :key="item">
                        {{ item }}
                    </div>
                </div>
            </div>
            <div class="installment__plans">
                <img :src="getImageUrl('calender.svg', 'svg')"
                     alt="">
                <div class="text__wrapper">
                    <p class="title">installment plans</p>
                    <p class="subTitle">Pakistan</p>
                </div>
            </div>
            <div class="installment__plans price">
                <img :src="getImageUrl('po-logo.svg', 'svg')"
                     alt="">
                <div class="text__wrapper">
                    <p class="title">priceoey guarantee</p>
                    <p class="subTitle">Get the item you order or get your money back</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import utilService from '@/services/util.service';

export default defineComponent({
    setup()
    {
        return { getImageUrl: utilService.getImageUrl, }
    },
})
</script>
<style lang="scss" scoped>
.overview__conatiner {
    background-color: #fff;
    height: 500px;
    width: 100%;
    margin: 15px 0px;
    display: flex;
    // align-items: center;

    .images__container {
        display: flex;
        height: 418px;
        width: 400px;
        padding: calc(30px / 2);
        align-items: center;
        border: 2.29px solid #d7d9db;
        border-radius: 18.37px;
    }

    .product__details {
        display: flex;
        align-items: flex-start;
        height: inherit;
        flex-direction: column;

        .title {
            font-size: 2rem;
            color: #202020;
        }

        .ratings {
            display: flex;
            align-items: center;
            margin-top: 15px;

            span {
                font-size: 1.2rem;
                color: #202020;
                font-weight: 500;
            }

            .image__wrapper {
                margin: 0px 6px;
                display: flex;
            }

            .approved {
                margin-left: 6px;
            }
        }

        .price__container {
            display: flex;
            width: 500px;
            justify-content: space-between;

            div {
                .title {
                    font-size: 1.3rem;
                    color: #909090;
                }

                .price {
                    color: #404040;
                    font-size: 2rem;
                    font-weight: 500;
                }
            }
        }

        .colors__container {
            .title {
                @extend .title;
                font-size: 1.4rem;
                color: #07121b;
                font-weight: 500;
            }

            .box__wrapper {
                display: flex;
                gap: 10px;

                .image__box {
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 2px solid #d7d9db;
                    box-sizing: border-box;
                    color: rgba(7, 18, 27, .4);
                    cursor: pointer;
                    height: 100%;
                    padding: calc(30px / 6);
                    overflow: hidden;
                    text-align: center;
                    width: 80px;
                    font-weight: 700;
                    // height: 80px;

                    &.active {
                        border: 2px solid #48afff;
                    }
                }

                .storage__box {
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 2px solid #d7d9db;
                    box-sizing: border-box;
                    color: rgba(7, 18, 27, .4);
                    cursor: pointer;
                    height: 100%;
                    padding: calc(30px / 6);
                    overflow: hidden;
                    text-align: center;
                    width: 80px;
                    font-weight: 700;
                    height: 80px;
                }
            }

        }

        .installment__plans {
            display: flex;
            border: 2px solid #cfcfcf;
            background-color: initial;
            padding: 0.8rem 1rem;
            width: 100%;
            max-width: 390px;
            border-radius: 8px;
            height: 60px;
            margin-top: 15px;

            &.price {
                background: rgba(215, 217, 219, .4);
                border: unset;
            }

            .text__wrapper {
                margin-left: 10px;

                .title {
                    color: #07121b;
                    line-height: 2rem;
                    font-size: 1.3rem;
                    font-weight: 500;
                    text-transform: capitalize;
                }

                .subTitle {
                    color: #909090;
                    line-height: 2rem;
                    font-size: 1.2rem;
                    font-weight: 400;
                    text-transform: capitalize;
                }
            }
        }
    }
}
</style>
