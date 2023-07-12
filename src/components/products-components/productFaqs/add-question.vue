<template>
    <div class="question">
        <questionAccordian v-for="(item, index) in faqs"
                           :key="index"
                           :question="item.question"
                           :answer="item.answer" />
        <div class="question__title">Ask a question</div>
        <div class="textarea__wrapper">
            <textarea name=""
                      id=""
                      v-model="faq.question"
                      placeholder="Write a question here..."
                      cols="30"
                      rows="10"></textarea>
        </div>
        <button class="button btn"
                @click="sendStateToServer()">Ask Question</button>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import questionAccordian from '@/components/question-accordian.vue';
import Faqs from '@/models/faqs.model';
import { useFaqsStore } from '@/stores/faqs.store'
import utilService from '@/services/util.service';
import { TYPE } from 'vue-toastification';
import { useproductStore } from '@/stores/product.store'

export default defineComponent({
    components: { questionAccordian },
    setup()
    {
        const faq = ref(new Faqs())
        const faqsStore = useFaqsStore()
        const { addFaqs, getFaqs } = faqsStore

        const faqs = computed(() => faqsStore.getAllFaqs)

        const productStore = useproductStore()
        const product = computed(() => productStore.product)


        const sendStateToServer = async () =>
        {
            faq.value.productId = product.value._id
            if (!faq.value.question)
                utilService.showToast('Please fill the question.', TYPE.SUCCESS)
            else
            {
                await addFaqs(faq.value)
                faq.value.question = ''
            }


        }
        watch(() => product.value._id, () =>
        {
            if (product.value._id)
                getFaqs(product.value._id)
        })

        const setInitialState = () =>
        {
            if (product.value._id)
                getFaqs(product.value._id)
        }

        onMounted(() => setInitialState())

        return { faq, addFaqs, sendStateToServer, faqs }
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

    .button {
        font-size: 1.3rem;
        font-weight: 500;
        padding: 1rem 2.5rem;
        margin-top: 16px;
    }
}
</style>
