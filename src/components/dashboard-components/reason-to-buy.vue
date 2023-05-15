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

<style lang="scss" scoped>
.reasons {
    max-width: 60%;
    margin: 32px auto;

    &__header {
        margin: 24px 0px;

        .title {
            color: #404040;
            font-size: 1.8rem;
            text-transform: capitalize;
        }
    }

    &__content {
        display: grid;
        grid-template-columns: auto auto;
        gap: 15px;

        .reason__info {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background: radial-gradient(25.65% 62.25% at 27.62% 50.2%, #48afff 21.57%, #0078d5 100%);
            border-radius: 10px;
            padding: 20px;
            // flex: calc(100% / 2 - 40px);
            // min-height: 200px;

            .image__wrapper {
                height: 155px;
                width: 155px;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }

            .reason__detail {
                text-align: center;

                &--text {
                    &.first-child {
                        width: 185px;
                    }

                    color: #fff;
                    font-weight: 400;
                    width: 180px;
                    margin-bottom: 25px;
                    font-size: 2.4rem;
                    text-transform: capitalize;



                }

                &--btn {
                    background: #fba338;
                    border-radius: 8px;
                    font-size: 1.4rem;
                    color: #fff;
                    font-weight: 400;
                    padding: 8px 15px;
                    outline: none;
                    border: unset;
                    height: 40px;
                }
            }


        }
    }
}
</style>