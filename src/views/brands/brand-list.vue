<template>
    <div class="categories">
        <div class="card">
            <div class="card__header">
                <h4>Manage Brands</h4>

            </div>
        </div>
        <div class="categories__content">
            <div class="card">
                <div class="card__header border-bottom">
                    <h4>All Brands</h4>
                    <button class="btn"
                            @click="open">Add Brand</button>
                </div>
                <div class="card__body">
                    <table class="table">
                        <thead class="table__header">
                            <tr>
                                <th>S No</th>
                                <!-- <th>Image</th> -->
                                <th>Name</th>
                                <th>Categories</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table__body">
                            <tr v-for="(brand, index) in brands"
                                :key="index">
                                <td>{{ index + 1 }}</td>
                                <!-- <td>
                                    <img class="image"
                                         :src="`${utilService.baseUrl}` + brand.image"
                                         alt="">
                                </td> -->
                                <td>{{ brand.name }}</td>
                                <td>
                                    <div class="badges"
                                         v-for="category in brand.categories"
                                         :key="category._id">
                                        {{ category.name }}
                                    </div>
                                </td>
                                <td>{{ moment(brand.createdAt).format("MMM Do YY") }}</td>
                                <td>
                                    <button class="btn rounded__icons">
                                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                    </button>
                                    <button class="btn rounded__icons danger">
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { openModal } from "jenesius-vue-modal";
import addBrand from './add-brand.vue';
import { useBrandStore } from '@/stores/brand.store'
import moment from 'moment';

export default defineComponent({
    setup()
    {
        const brandStore = useBrandStore()
        const { getBrands } = brandStore

        const brands = computed(() => brandStore.get)
        const open = async () =>
        {
            await openModal(addBrand)
        }

        onMounted(async () =>
        {
            await getBrands()
        })

        return {
            open,
            brands,
            moment
        }
    },
})
</script>
