<template>
    <div class="categories">
        <div class="card">
            <div class="card__header">
                <h4>Manage Products</h4>

            </div>
        </div>
        <div class="categories__content">
            <div class="card">
                <div class="card__header border-bottom">
                    <h4>All Products</h4>
                    <button class="btn">Back To Products</button>
                </div>
                <div class="card__body">
                    <table class="table">
                        <thead class="table__header">
                            <tr>
                                <th>S No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Brand</th>
                                <th>Quantity</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table__body">
                            <tr v-for="(product, index) in products"
                                :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.price }}</td>
                                <td>{{ product.brand.name }}</td>
                                <td>{{ product.quantity }}</td>
                                <td>{{ moment(product.createdAt).format("MMM Do YY") }}</td>
                                <td>
                                    <button class="btn rounded__icons">
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button class="btn rounded__icons"
                                            @click="router.push(`/products/edit-products/${product._id}`)">
                                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                    </button>
                                    <button class="btn rounded__icons danger"
                                            @click="deleteProduct(product._id)">
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
import moment from 'moment'
import utilService from '@/services/util.service';
import { useproductStore } from '@/stores/product.store'
import { useRouter } from 'vue-router'


export default defineComponent({
    setup()
    {
        const router = useRouter()
        const productStore = useproductStore()
        const { getProducts, deleteProduct } = productStore

        const products = computed<any>(() => productStore.get)

        onMounted(async () =>
        {
            await getProducts()
        })

        return { products, moment, router, deleteProduct }
    },
})
</script>

