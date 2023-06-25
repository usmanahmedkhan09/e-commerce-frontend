<template>
    <div class="product__dashboard">
        <ProductsHeader v-if="category"
                        :category="category" />
        <carousel class="dashboard__banner"
                  :items-to-show="1"
                  :autoplay="5000"
                  :wrap-around="true">
            <slide v-for="slide in banners"
                   :key="slide">
                <img :src="getImageUrl(slide, 'images')"
                     alt="">
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
        <div class="product__dashboard__content">
            <div class="header__card">
                <p class="title">Buy <span>{{ category }}</span> in Pakistan {{ new Date().getFullYear() }}</p>
                <p class="subTitle">{{ products.length }} results for <span>{{ category }}</span>. Find a wide range of
                    mobiles at the lowest
                    rates in Pakistan,
                    only at PriceOye.
                </p>
            </div>
            <div class="listing">
                <ProductsFilters class="listing__filters" />
                <div class="listing__items">
                    <template v-if="products.length > 0">
                        <ProductsListingItems v-for="product in products"
                                              :key="product.name"
                                              :product="product"
                                              class="productBox" />
                    </template>
                    <div class="error"
                         v-else>
                        <p>No result found</p>
                    </div>
                </div>
            </div>
            <pagination v-if="totalPages && totalPages > 1"
                        :totalPages="totalPages"
                        @goToSelectedPage="(data) => sendStateToServer(data)"
                        @goToPrePage="(data) => sendStateToServer(data)"
                        @goToNextPage="(data) => sendStateToServer(data)" />
        </div>
        <div class="warranty__section card">
            <div v-for="item in warranty"
                 :key="item.name"
                 class="item">
                <img :src="getImageUrl(item.icon, 'svg')"
                     alt=""
                     height="25">
                <p>{{ item.name }}</p>
            </div>
        </div>
        <footerVue />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import ProductsHeader from '@/components/products-components/products-header.vue';
import utilService from '@/services/util.service'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import ProductsFilters from '@/components/products-components/products-filters.vue';
import ProductsListingItems from '@/components/products-components/products-listing-items.vue';
import { useproductStore } from '@/stores/product.store'
import { useRoute } from 'vue-router'
import footerVue from '@/components/footer.vue';
import pagination from '@/components/pagination.vue';
import { ProductFilters } from '@/models/product.model'

export default defineComponent({
    components: {
        ProductsHeader,
        Carousel,
        Navigation,
        ProductsFilters,
        Slide,
        ProductsListingItems,
        footerVue,
        pagination
    },
    setup()
    {
        const route = useRoute()
        let filters = ref(new ProductFilters())

        const productStore = useproductStore()
        const { getProductByCategoryName } = productStore
        const products = computed(() => productStore.get)
        const totalPages = computed(() => productStore.getTotalProducts / productStore.filters.count)


        const banners = ref(['banner-1.jpg', 'banner-2.png', 'banner-3.jpg', 'banner-4.jpg'])
        const warranty = ref([
            { name: '100% origianl product', icon: 'percentage.svg' },
            { name: 'fast delivery', icon: 'cockade.svg' },
            { name: 'easy replacement', icon: 'replace.svg' },
        ])

        const category = computed(() => route.params.category as string)

        watch([() => route.params.category, () => productStore.filters.brand, () => productStore.filters.sort], (oldValue, newValue) =>
        {
            setInitialState()
        })

        const setInitialState = async () =>
        {
            if (route.params.category)
            {
                await getProductByCategoryName(route.params.category as string)
            }

        }
        onMounted(() => setInitialState())

        const sendStateToServer = (pageNumber: any) =>
        {
            productStore.filters.page = pageNumber
            getProductByCategoryName(route.params.category as string)
        }
        return { banners, getImageUrl: utilService.getImageUrl, products, category, warranty, totalPages, sendStateToServer }
    },
})
</script>
<style lang="scss" scoped>
.product__dashboard {
    background-color: #F1F3F6;

    &__content {
        padding: 24px;

        .header__card {
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;

            .title {
                font-size: 1.6rem;

                span {
                    text-transform: capitalize;
                }
            }

            .subTitle {
                font-size: 1.2rem;

                span {
                    text-transform: capitalize;
                }
            }
        }

        .listing {
            display: flex;
            gap: 16px;
            margin-block: 20px;

            &__filters {
                flex: 1 0 25%;
                background: #fff;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
            }

            &__items {
                flex: 80%;
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                align-content: flex-start;

                .productBox {
                    flex: calc(100% / 4 - 16px);
                    max-width: calc(100% / 4 - 16px);
                }
            }

            .error {
                text-align: center;
                width: 100%;
                text-transform: capitalize;

                p {
                    font-weight: 700;
                }
            }
        }
    }

    .warranty__section {
        display: flex;
        width: 100%;
        justify-content: space-around;
        min-height: 100px;
        align-items: center;
        box-shadow: unset;

        .item {
            display: flex;
            flex-direction: column;
            flex: calc(100% / 3);
            text-align: center;
            justify-content: center;
            height: 100px;

            &:nth-child(2) {
                border-right: 1px solid #d6d6d6;
                border-left: 1px solid #d6d6d6;
            }

            p {
                font-size: 1.3rem;
                margin: 5px 0px;
                text-transform: capitalize;
            }
        }
    }
}
</style>

