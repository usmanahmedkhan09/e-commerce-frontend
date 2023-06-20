<template>
    <div class="sidebar__accordian"
         :class="{ 'active': showBrands }">
        <div class="sidebar__accordian__header">
            <div class="title"
                 @click.stop="showBrands = !showBrands">
                <img class="title__icon"
                     :src="getImageUrl(`sidebar-${category?.name.split(' ').join('-').toLowerCase()}-icon.svg`, 'svg')"
                     alt="">
                <span class="category__name"
                      @click.exact.stop="selectedCategory = category?.name, goToCategorPage()">{{ category?.name }}</span>
                <img class="caret"
                     :src="getImageUrl(`caret.svg`, 'svg')"
                     alt=""
                     @click.exact="selectedCategory = category?.name">
            </div>
        </div>
        <div class="sidebar__accordian__content"
             v-if="showBrands"
             :class="{ 'active': showBrands }">
            <div class="brands"
                 v-for="(brand, index) in brands"
                 :key="index">
                <p class="brands__item"
                   @click.exact.stop="goToCategorPage(), selectedBrand = brand.name">{{ brand.name }}</p>
            </div>
            <div class="accordian__subSection">
                <div class="accordian__subSection__header"
                     :class="{ 'active': showMore }">
                    <div class="title"
                         @click.stop="showMore = !showMore">
                        <span class="category__name">Show More</span>
                        <img class="caret"
                             :src="getImageUrl(`caret.svg`, 'svg')"
                             alt="">
                    </div>
                </div>
                <div class="sidebar__accordian__content"
                     v-if="showMore"
                     :class="{ 'active': showMore }">
                    <div class="brands"
                         v-for="(brand, index) in remaningBrands"
                         :key="index">
                        <p class="brands__item">{{ brand.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import utilService from '@/services/util.service';
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useproductStore } from '@/stores/product.store'


export default defineComponent({
    props: {
        icon: {
            type: String
        },
        category: {
            type: Object,
            required: true
        }
    },
    setup(props)
    {
        const productStore = useproductStore()
        const selectedCategory = ref('')
        const selectedBrand = ref('')
        const authStore = useAuthStore()
        const showSidebar = computed(() => authStore.showSidebar)
        const router = useRouter()
        const showBrands = ref(false)
        const showMore = ref(false)
        const brands = ref(props.category.brands.slice(0, 5))
        const remaningBrands = computed(() => props.category.brands.slice(5, props.category.brands.length - 1))

        const goToCategorPage = () =>
        {
            console.log(selectedCategory.value)
            if (selectedBrand.value)
            {
                productStore.filters.brand.push(selectedBrand.value)
            }
            authStore.$patch({ showSidebar: !showSidebar })
            router.push(`/${selectedCategory.value}`)
        }
        return { getImageUrl: utilService.getImageUrl, showBrands, brands, remaningBrands, showMore, goToCategorPage, selectedCategory, selectedBrand }
    },
})
</script>
<style lang="scss" scoped>
.sidebar__accordian {

    &.active {
        background: rgba(116, 138, 152, .05);
        border-radius: 10px;
    }

    &__header {
        padding: 10px 20px 10px 15px;
        display: flex;

        .title {
            display: flex;
            gap: 10px;
            width: 100%;
            align-items: center;

            .title__icon {
                height: 30px;
            }

            .category__name {
                text-transform: capitalize;
                color: #404040;
                font-size: 1.4rem;
                align-self: flex-end;
                flex-grow: 1;
            }
        }


    }

    &__content {

        &.active {
            border-top: 1px solid #ccc;
            margin-bottom: 2rem;
            padding: 5px 0 0 0px;
            list-style: none;
        }

        .brands {

            .brands__item {
                display: block;
                color: #404040;
                font-weight: 400;
                padding: 5px 20px;
                font-size: 1.4rem;
                text-transform: capitalize;

                :first-child {
                    margin-top: 10px;
                }

                &:hover {
                    background: rgba(116, 138, 152, .08);
                }
            }
        }

        .accordian__subSection {

            &__header {
                @extend .sidebar__accordian__header;

                &.active {
                    background: rgba(116, 138, 152, .05);
                    border-radius: 10px;
                }
            }
        }
    }
}
</style>
