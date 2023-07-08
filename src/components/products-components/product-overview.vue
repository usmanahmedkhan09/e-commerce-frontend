<template>
    <div class="overview__conatiner">
        <div class="images__container">
            <carousel class="dashboard__banner"
                      :items-to-show="1"
                      :autoplay="5000"
                      :wrap-around="true">
                <slide v-for="item in product.productImages"
                       :key="item.path">
                    <img class="image"
                         :src="baseUrl + item.path"
                         alt="">
                </slide>

                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
        <div class="product__details">
            <h1 class="title">{{ product.name }}</h1>
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
                    <p class="price">Rs.{{ product.price }}</p>
                </div>
                <div>
                    <p class="title">Availability</p>
                    <p class="price">{{ product.quantity && product.quantity > 0 ? 'In Stock' : 'Out Of Stock' }}</p>
                </div>
            </div>
            <div class="colors__container">
                <p class="title">Colors</p>
                <div class="box__wrapper">
                    <div class="image__box image__height"
                         v-for="item in product.productImages"
                         :class="{ 'active': item == 3 }"
                         :key="item">
                        <img :src="baseUrl + item.path"
                             alt="">
                        <p>{{ item.color }}</p>
                    </div>
                </div>

            </div>
            <div class="colors__container">
                <p class="title">Storage</p>
                <div class="box__wrapper">
                    <div class="image__box"
                         v-for="item in [32, 64, 128]"
                         :key="item"
                         :class="{ 'active': item == 3 }">
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
            <div class="button__wrapper">
                <button class="button btn">Add To Cart</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service';
import { Product } from '@/models/product.model'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        product: {
            type: Product,
            default: new Product()
        },
    },
    setup(props)
    {
        // let product = ref<Product>(props.product)
        return { getImageUrl: utilService.getImageUrl, baseUrl: utilService.baseUrl }
    },
})
</script>
<style lang="scss" scoped>
.overview__conatiner {
    background-color: #fff;
    width: 100%;
    margin: 15px 0px;
    display: flex;
    gap: 24px;
    padding: 24px 0px;

    .images__container {
        display: flex;
        height: 418px;
        width: 456px;
        padding: calc(30px / 2);
        align-items: center;
        border: 2.29px solid #d7d9db;
        border-radius: 18.37px;
        margin-left: 34rem;

        .dashboard__banner {
            width: 456px;

            .image {
                height: 270px;
                width: 270px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
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
            margin-top: 16px;
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
            margin-top: 16px;

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

                    &.active {
                        border: 2px solid #48afff;
                    }

                    p {
                        font-size: 1rem;
                        text-transform: capitalize;
                        color: rgba(7, 18, 27, .4);
                        font-weight: 500;
                        margin-top: 3px;
                    }

                    &.image__height {
                        // height: 80px !important;

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

        .button__wrapper {
            .button {
                color: #fff;
                background-color: #f88b2a;
                border-color: #cf6507;
                padding: 9px;
                font-size: 1.4rem;
                font-weight: 400;
                width: 390px;
                margin-top: 16px;
            }
        }
    }
}
</style>
