<template>
    <section class="reasons">
        <div class="reasons__header">
            <h4 class="title">Reason To Buy</h4>
        </div>
        <div class="reasons__content">
            <div class="reason__info"
                 v-for="reason in reasons"
                 :key="reason.image">
                <div class="image__wrapper">
                    <img :src="getImageByName(reason.image)"
                         alt="">
                </div>
                <div class="reason__detail">
                    <p class="reason__detail--text"
                       :class="reason.class">{{ reason.value }}</p>
                    <button class="reason__detail--btn">Know More</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service'

export default defineComponent({
    setup()
    {
        const reasons = ref([
            { image: 'open_parcel.svg', value: 'Open parcel (ISB - LHR - KHI)', class: 'first-child' },
            { image: 'easy_instalment.svg', value: 'Easy Installments' },
            { image: 'price_match.svg', value: 'Price Match policy' },
            { image: 'order-packaging.svg', value: 'packaging Video' },
        ])

        const getImageByName = (name: any) =>
        {
            return utilService.getImageUrl(name, 'svg')
        }

        return {
            reasons,
            getImageByName
        }
    },
})
</script>

<style lang="scss" scoped></style>