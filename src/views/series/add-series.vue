<template>
    <div class="categories">
        <div class="card categoryCard">
            <div class="card__header border-bottom">
                <h4>Add Series</h4>
            </div>
            <div class="categoryCard__body">
                <form class="category__form">
                    <input type="text"
                           class="input"
                           placeholder="Enter a series name">
                    <select class="input"
                            name="brandId"
                            id="brandId">
                        <option value=""
                                selected
                                disabled>Select a brand</option>
                    </select>
                    <button class="btn w-100">
                        Add Series
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
