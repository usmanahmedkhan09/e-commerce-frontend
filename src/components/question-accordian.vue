<template>
    <div class="question__accordian">
        <div class="question__accordian__header">
            <p class="title">Q. {{ question }}?</p>
            <img class="caret"
                 :src="getImageUrl(`caret.svg`, 'svg')"
                 alt="accordian"
                 @click="close">
        </div>
        <div class="answer"
             :class="{ 'active': isOpen }">
            {{ answer }}
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service';

export default defineComponent({
    props: {
        question: String,
        answer: String
    },
    setup()
    {
        const isOpen = ref(false)
        const close = () => isOpen.value = !isOpen.value
        return { getImageUrl: utilService.getImageUrl, isOpen, close }
    },
})
</script>
<style lang="scss" scoped>
.question__accordian {
    padding: 15px;
    border: 1.31px solid #d7d9db;
    border-radius: 8px;
    margin-bottom: 15px;

    &__header {
        display: flex;
        justify-content: space-between;

        .title {
            color: #404040;
            font-weight: 500;
            font-size: 1.3rem;
        }
    }

    .answer {
        display: none;
        font-size: 1.2rem;
        color: rgba(7, 18, 27, .6);

        &.active {
            display: inline-block;
        }
    }

    &__content {
        // margin-bottom: 2rem;
        // border-bottom: 1px solid #dbdbdb;
    }
}
</style>
