<template>
    <div class="navigation">
        <div class="navigation__title">Main Navigation</div>
        <ul class="navigation__content">
            <li v-for="item in links"
                :key="item.name"
                class="item">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup()
    {
        const links = ref([
            { name: "About", value: "" },
            { name: "FAQs", value: "" },
            { name: "Careers", value: "" },
            { name: "Contact", value: "" },
            { name: "Privacy", value: "" },
            { name: "Press & Blog", value: "" },
            { name: "Instalments & Condition", value: "" },
            { name: "E-Warranty Activation", value: "" },
        ])
        return { links }
    },
})
</script>
<style lang="scss" scoped>
.navigation {
    margin-top: 64px;

    &__title {
        color: #748a98;
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    &__content {

        .item {
            color: #606060;
            font-weight: 400;
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }
    }
}
</style>
