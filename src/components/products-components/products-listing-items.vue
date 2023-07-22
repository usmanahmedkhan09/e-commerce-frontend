<template>
    <div v-if="product"
         class="productBox">
        <div class="image__Wrapper">
            <img :src="baseUrl + product.productImages[0].path"
                 alt="">
        </div>
        <div class="content">
            <p class="title">{{ product.name }}</p>
            <p class="price">Rs.{{ product.discount > 0 ? calculateDiscount(product.price, product.discount) :
                formatePrice(product.price) }} </p>
            <p class="price-diff"
               v-show="product.discount > 0"><span>Rs. {{ formatePrice(product.price) }}</span> <span>({{
                   product.discount
               }}% Off)</span></p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import utilService from '@/services/util.service';
export default defineComponent({
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    setup()
    {
        return { baseUrl: utilService.baseUrl, formatePrice: utilService.formatePrice, calculateDiscount: utilService.calculateDiscount }
    },
})
</script>
<style lang="scss" scoped>
.productBox {
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 8px;
    height: 275px;
    padding: 16px;

    .image__Wrapper {
        height: 120px;
        width: 120px;
        margin: 0px auto;
    }

    .content {
        .title {
            color: #404040;
            margin: 24px 0px;
            font-weight: 400;
            font-size: 1.4rem;
        }

        .price {
            color: #404040;
            font-weight: 500;
        }

        .price-diff {
            font-size: 1.2rem;
            color: rgba(7, 18, 27, .4);

            :first-child {
                text-decoration: line-through;
            }
        }
    }
}
</style>
