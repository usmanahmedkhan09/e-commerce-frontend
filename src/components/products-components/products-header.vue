<template>
    <section class="products__navigation">
        <ul class="nav__links">
            <li class="nav__links--item"
                v-for="link in links"
                :key="link.name">
                <img height="50"
                     width="50"
                     :src="getImageUrl(link.icon, 'images')"
                     alt=""
                     @click="productStore.filters.brand = [link.name]">
            </li>
        </ul>
    </section>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import utilService from '@/services/util.service'
import { useproductStore } from '@/stores/product.store'
export default defineComponent({
    props: {
        category: {
            type: String,
            required: true
        }
    },
    setup(props)
    {
        const productStore = useproductStore()
        const links = ref<any[]>([])
        const mobiles__links = ref([
            { name: 'sumsung', icon: 'samsung.jpg' },
            { name: 'infinix', icon: 'infinix.jpg' },
            { name: 'oppo', icon: 'oppo.jpg' },
            { name: 'xiaomi', icon: 'xiaomi.jpg' },
            { name: 'vivo', icon: 'vivo.jpg' },
            { name: 'tecno', icon: 'tecno.jpg' },
            { name: 'realme', icon: 'realme.jpg' },
            { name: 'itel', icon: 'itel.jpg' },
        ])

        const tablets__links = ref<any[]>([
            { name: 'iphone', icon: 'apple.jpg' },
            { name: 'samsung', icon: 'samsung.jpg' },
            { name: 'dany', icon: 'dany.jpg' },
            { name: 'xiaomi', icon: 'xiaomi.jpg' },
        ])

        const laptops__links = ref<any[]>([
            { name: 'infinix', icon: 'infinix.jpg' },
            { name: 'apple', icon: 'apple.jpg' },
            { name: 'dell', icon: 'dell.jpg' },
            { name: 'hp', icon: 'hp.jpg' },
        ])

        const watches__links = ref<any[]>([
            { name: 'mibro', icon: 'mibro.jpg' },
            { name: 'assorted', icon: 'assorted.jpg' },
            { name: 'kieslect', icon: 'kieslect.jpg' },
            { name: 'zero', icon: 'zero.jpg' },
        ])

        watch(() => props.category, () =>
        {
            if (props.category == 'mobiles')
                links.value = mobiles__links.value
            else if (props.category == 'tablets')
                links.value = tablets__links.value
            else if (props.category == 'laptops')
                links.value = laptops__links.value
            else if (props.category == 'smart watches')
                links.value = watches__links.value
        }, { deep: true })

        const setInitialState = () =>
        {
            if (props.category == 'mobiles')
                links.value = mobiles__links.value
            else if (props.category == 'tablets')
                links.value = tablets__links.value
            else if (props.category == 'laptops')
                links.value = laptops__links.value
            else if (props.category == 'smart watches')
                links.value = watches__links.value
        }

        onMounted(() => setInitialState())

        return { links, getImageUrl: utilService.getImageUrl, productStore }
    },
})
</script>
<style lang="scss" scoped>
.products__navigation {
    background: #fff;
    height: 50px;
    padding: 0px 25px;
    margin-bottom: 2rem;

    .nav__links {
        display: flex;
        justify-content: center;
        align-items: center;

        &--item {
            width: 140px;

            img {
                filter: grayscale(100%);

                &:hover {
                    filter: unset;
                }
            }
        }
    }
}
</style>