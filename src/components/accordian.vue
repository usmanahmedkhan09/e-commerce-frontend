<template>
    <div class="accordian">
        <div class="accordian__header">
            <p class="title">{{ title }}</p>
            <img class="caret"
                 :src="getImageUrl(`caret.svg`, 'svg')"
                 alt="accordian"
                 @click="close">
        </div>
        <div class="accordian__content"
             v-if="isOpen">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup()
    {
        const isOpen = ref(true)
        const close = () => isOpen.value = !isOpen.value
        return { getImageUrl: utilService.getImageUrl, isOpen, close }
    },
})
</script>
<style lang="scss" scoped>
.accordian {
    &__header {
        display: flex;
        justify-content: space-between;

        .title {
            color: #404040;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 1.3rem;
        }
    }

    &__content {
        margin-bottom: 2rem;
        border-bottom: 1px solid #dbdbdb;
    }
}
</style>
