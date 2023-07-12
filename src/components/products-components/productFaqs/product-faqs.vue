<template>
    <section class="faqs">
        <div class="faqs__title">
            <p>Question About {{ product.name }}</p>
        </div>
        <div class="faqs__body">
            <addQuestion />
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import addQuestion from './add-question.vue';
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
    components: { addQuestion },
    setup()
    {
        const producStore = useproductStore()
        const product = computed(() => producStore.product)
        return { product }
    },
})
</script>
<style lang="scss" scoped>
.faqs {
    // padding: 30px 0;

    &__title {
        margin: 0 auto;
        max-width: 124rem;
        position: relative;
        width: 100%;
        text-transform: capitalize;

        p {
            font-weight: 500;
        }
    }

    &__body {
        background-color: #fff;
        padding: 16px;
        margin-top: 16px;
    }
}
</style>
