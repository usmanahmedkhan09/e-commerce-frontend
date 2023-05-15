<template>
    <section class="footer">
        <div class="primary__footer">
            <ul class="column">
                <li class="image__wrapper">
                    <img :src="getImageByName('logo.svg', 'svg')"
                         alt="">
                </li>
                <li class="item"
                    v-for="item in list"
                    :key="item">
                    {{ item }}
                </li>
            </ul>
            <ul class="column">
                <li class="column__header">Customer Service</li>
                <li class="item"
                    v-for="item in services"
                    :key="item">
                    {{ item }}
                </li>
            </ul>
            <ul class="column">
                <li class="column__header">Secure Payments Methods</li>
                <li class="item">
                    <img width="270"
                         height="28"
                         :src="getImageByName('payment_method.svg', 'svg')"
                         alt="" />
                </li>
            </ul>
        </div>
        <div class="secondary__footer">
            <div class="container">
                <div class="column title">PriceOye.pk</div>
                <div class="column social__icons">
                    <div class=""
                         v-for="item in socialIcons"
                         :key="item">
                        <img :src="getImageByName(item, 'svg')"
                             alt="">
                    </div>
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
        const list = ref(["about us", "FAQ's", "Contact us", "Careers", "Press & Blog", "Terms & Condition"])
        const services = ref(["help center", "privacy policy", "installments plan", "E-Warranty activation"])
        const socialIcons = ref(["social-youtube.svg", "social-fb.svg", "social-instagram.svg", "linkedin.svg"])

        return { list, services, socialIcons, getImageByName: utilService.getImageUrl }
    },
})
</script>
<style lang="scss" scoped>
.footer {
    background-color: #48afff;
    // min-height: 400px;
    padding-top: 24px;

    .primary__footer {
        display: flex;
        max-width: 60%;
        margin: auto;
        padding-top: 16px;

        .column {
            flex: 0 0 33%;

            li {
                color: white;
                margin-bottom: 1rem;
                font-size: 1.4rem;
                text-transform: capitalize;
                font-weight: 100;

                &.image__wrapper {
                    width: 170px;
                }

                &.column__header {
                    font-size: 1.8rem;
                    margin-bottom: 16px;
                }
            }

        }
    }

    .secondary__footer {

        background-color: #3eabff;

        .container {
            display: flex;
            max-width: 60%;
            margin: auto;
            padding: 1.8rem 0rem;
            align-items: center;

            .column {
                flex: 0 0 33%;

                &.title {
                    font-size: 1.3rem;
                    color: white;
                }
            }

            .social__icons {
                display: flex;
                gap: 10px;
            }


        }


    }
}
</style>
