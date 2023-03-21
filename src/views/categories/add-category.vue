<template>
    <div class="categories">
        <div class="card categoryCard">
            <div class="card__header border-bottom">
                <h4>Add Category</h4>
            </div>
            <div class="categoryCard__body">
                <form class="category__form">
                    <input type="text"
                           class="input"
                           placeholder="Enter a category name">
                    <button class="btn w-100">
                        Add Category
                    </button>
                </form>

            </div>
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
