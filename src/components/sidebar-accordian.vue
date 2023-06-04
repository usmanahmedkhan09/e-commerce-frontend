<template>
    <div class="sidebar__accordian">
        <div class="sidebar__accordian__header">
            <div class="title">
                <img class="title__icon"
                     :src="getImageUrl(`sidebar-${category?.name.split(' ').join('-').toLowerCase()}-icon.svg`, 'svg')"
                     alt="">
                <span class="category__name">{{ category?.name }}</span>
                <img class="caret"
                     :src="getImageUrl(`caret.svg`, 'svg')"
                     alt="">
            </div>
        </div>
        <div class="sidebar__accordian__content">
            <div class="brands"
                 v-for="brand in category.brands"
                 :key="brand">
                <p class="brands__item">{{ brand.name }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
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
        return { getImageUrl: utilService.getImageUrl }
    },
})
</script>
<style lang="scss" scoped>
.sidebar__accordian {
    padding: 10px 20px 10px 15px;

    &__header {
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
            }
        }
    }
}
</style>
