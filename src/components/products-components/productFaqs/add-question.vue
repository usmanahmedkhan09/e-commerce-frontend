<template>
    <div class="question">
        <div class="question__title">Ask a question</div>
        <div class="textarea__wrapper">
            <textarea name=""
                      id=""
                      placeholder="Write a question here..."
                      cols="30"
                      rows="10"></textarea>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup()
    {
        return {}
    },
})
</script>
<style lang="scss" scoped>
.question {
    margin: 0px 34rem;

    .question__title {
        color: #202020;
        font-weight: 500;
        margin: 16px 0px;
    }

    .textarea__wrapper {
        width: 100%;

        textarea {
            border: 1.31px solid #d7d9db;
            border-radius: 8px;
            min-height: 12rem;
            width: inherit;
            height: 3.8rem;
            font-size: 1.4rem;
            padding: 16px;

            &:focus {
                outline: unset;
            }
        }
    }
}
</style>
