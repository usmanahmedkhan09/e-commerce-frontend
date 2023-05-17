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
<style lang="scss" scoped></style>
