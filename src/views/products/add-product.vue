<template>
    <div class="products">
        <div class="card">
            <div class="card__header border-bottom">
                <h4>Add Product</h4>
                <button class="btn">Back To Products</button>
            </div>
            <div class="card__body">
                <form class="product__form">
                    <div class="input__wrapper">
                        <input type="text"
                               class="input"
                               placeholder="Enter product name">
                        <input type="number"
                               placeholder="Enter product price"
                               class="input">
                    </div>
                    <div class="input__wrapper">
                        <input type="number"
                               placeholder="Enter product quantity"
                               class="input">
                        <input type="number"
                               placeholder="Enter product model"
                               class="input">
                    </div>
                    <div class="input__wrapper">
                        <select class="input"
                                name="category"
                                id="categoryId">
                            <option value=""
                                    selected
                                    disabled>Select a category</option>
                        </select>
                        <select class="input"
                                name="brandId"
                                id="brandId">
                            <option value=""
                                    selected
                                    disabled>Select a brand</option>
                        </select>
                    </div>
                    <select class="input"
                            name="series"
                            id="series">
                        <option value=""
                                selected
                                disabled>Select a series</option>
                    </select>
                    <textarea type="number"
                              placeholder="Enter product description"
                              class="input textarea" />
                    <input type="file"
                           class="input"
                           placeholder="Choose product images">

                    <div class="button__wrapper">
                        <button class="btn">Add Product</button>
                    </div>
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
