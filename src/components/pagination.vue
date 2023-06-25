<template>
    <div class="pagination">
        <div class="btn"
             :class="{ 'disabled': selectedPage == 1 }"
             @click="selectedPage--, $emit('goToPrePage', selectedPage)">
            prev
        </div>
        <div v-for="item in pages"
             :key="item"
             @click="selectedPage = item, $emit('goToSelectedPage', selectedPage)">
            <div class="btn btn__numbers"
                 :class="{ 'active': selectedPage == item }">{{ item }}</div>
        </div>
        <div class="btn"
             :class="{ 'disabled': selectedPage == pages.length }"
             @click="selectedPage++, $emit('goToNextPage', selectedPage)">
            next
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
    props: ["totalPages"],
    setup(props)
    {
        const selectedPage = ref(1)
        const pages = ref()

        watchEffect(() =>
        {
            pages.value = Array.from({ length: Math.ceil(props.totalPages) }, (_, index) => index + 1)
        })
        return { pages, selectedPage }
    },
})
</script>
<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    .btn {
        font-size: 1.2rem;
        min-width: unset;
        padding: 4px;

        &:hover {
            background-color: #aedcff;
        }

        &.btn__numbers {
            padding: 4px 8px;

            &.active {
                background-color: #ff338c;
            }
        }

        &.disabled {
            pointer-events: none;
            background-color: #aedcff;
            cursor: not-allowed !important;
        }
    }
}
</style>
