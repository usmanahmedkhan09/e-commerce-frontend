<template>
    <div class="pagination">
        <div class="btn">
            prev
        </div>
        <div v-for="item in pages"
             :key="item">
            <div class="btn btn__numbers active">{{ item }}</div>
        </div>
        <div class="btn">
            next
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: ["totalPages"],
    setup(props)
    {
        const pages = ref(Array.from({ length: props.totalPages }, (_, index) => index + 1))
        return { pages }
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
    }
}
</style>
