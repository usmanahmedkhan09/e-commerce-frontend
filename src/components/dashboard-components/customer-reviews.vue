<template>
    <div class="customer__reviews">
        <div class="customer__reviews--header">
            <h4>Customer Reviews</h4>
            <p>What our Customers say about Priceoye.pk</p>
        </div>
        <div class="customer__reviews--content">
            <div class="customer__reviews--content--card"
                 v-for="(item, index) in reviews"
                 :key="index">
                <div class="user__profile">
                    <div class="image__wrapper">
                        <img :src="getImageUrl('user-icon-white.svg', 'svg')"
                             alt="">
                    </div>
                    <div class="user__description">
                        <p class="user__description--name">{{ item.name }} <span>Verified Customer</span></p>
                        <div class="user__description--rating">
                            <img v-for="item in [1, 2, 3, 4, 5]"
                                 :key="item"
                                 :src="getImageUrl('stars.svg', 'svg')"
                                 alt="">
                        </div>
                        <p class="user__description--date">11 May 2023</p>
                    </div>
                </div>
                <div class="user__review">
                    <p>{{ item.review }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service'

export default defineComponent({
    setup()
    {
        const reviews = ref([
            { review: 'Quick delivery and reliable product...I would definitely shop again and recommend priceoye to anyone without hesitation..Keep up the Good work', name: 'Usman Ahmed' },
            { review: 'Quick delivery and reliable product...I would definitely shop again and recommend priceoye to anyone without hesitation..Keep up the Good work', name: 'Usaid Ansari' },
            { review: 'Mainy priceoye say odera kiya tha M-10 jo k received ho gya hai quality Wise bht acha hai but time jo mention hai wo airbud\'s ka kam hai 1and half hours chaly k', name: 'Khalid Mehmood' },
            { review: 'It\'s my 4th order with PriceOye, and PriceOye always delivers quality products at the lowest price.', name: 'Mutahher Mahmood' },
            { review: 'Product received as advertised. Very quick delivery. From karachi to sargodha in 1 day. Packageing was good. . Much satisfied', name: 'Sibghatullah Hamza' },
            { review: 'The Best Marketplace in the Country... Iam speechless to be honest... LOWEST PRICE GENUINE PRODUCT FREE DELIVERY and the Best thing was that PACKAGING VIDEO', name: 'Shaikh Rehman' },
            { review: 'The Best Marketplace in the Country... Iam speechless to be honest... LOWEST PRICE GENUINE PRODUCT FREE DELIVERY and the Best thing was that PACKAGING VIDEO', name: 'Atthar' }
        ])
        return {
            reviews,
            getImageUrl: utilService.getImageUrl
        }
    },
})
</script>
<style lang="scss" scoped></style>
