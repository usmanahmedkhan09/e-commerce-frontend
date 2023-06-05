<template>
    <div class="sidebar__accordian"
         :class="{ 'active': showBrands }">
        <div class="sidebar__accordian__header">
            <div class="title"
                 @click.stop="showBrands = !showBrands">
                <img class="title__icon"
                     :src="getImageUrl(`sidebar-${category?.name.split(' ').join('-').toLowerCase()}-icon.svg`, 'svg')"
                     alt="">
                <span class="category__name">{{ category?.name }}</span>
                <img class="caret"
                     :src="getImageUrl(`caret.svg`, 'svg')"
                     alt="">
            </div>
        </div>
        <div class="sidebar__accordian__content"
             v-if="showBrands"
             :class="{ 'active': showBrands }">
            <div class="brands"
                 v-for="brand in category.brands.slice(0, 5)"
                 :key="brand">
                <p class="brands__item">{{ brand.name }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service';

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
    setup()
    {
        const showBrands = ref(false)
        return { getImageUrl: utilService.getImageUrl, showBrands }
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
    }
}
</style>
