<template>
       <div>
              <h3>Camera Features:</h3>
       </div>
       <div class="input__wrapper">
              <div>
                     <Field v-model="product.camera.frontCamera"
                            type="text"
                            class="input"
                            name="front camera"
                            placeholder="Enter front camera size"
                            required />
                     <ErrorMessage class="error__message"
                                   name="front camera" />
              </div>
              <div>
                     <Field v-model="product.camera.backCamera"
                            type="text"
                            placeholder="Enter back camera size"
                            class="input"
                            name="back camera" />
                     <ErrorMessage class="error__message"
                                   name="back camera" />
              </div>

       </div>
       <div class="input__wrapper">
              <div>
                     <Field v-model="product.camera.backvideorecording"
                            type="text"
                            class="input"
                            name="back video recording"
                            placeholder="Enter back video recording"
                            required />
                     <ErrorMessage class="error__message"
                                   name="back video recording" />
              </div>
              <div>
                     <Field v-model="product.camera.frontvideorecording"
                            type="text"
                            class="input"
                            placeholder="Enter front video recording"
                            required
                            name="front video recording" />
                     <ErrorMessage class="error__message"
                                   name="front video recording" />
              </div>

       </div>
       <div class="checkbox__wrapper">
              <div class="input__wrapper">
                     <p for="card"
                        id="card">Front Flash Light:</p>
                     <input type="radio"
                            id="html"
                            name="front_flash"
                            :value="true"
                            v-model="product.camera.frontflashlight">
                     <label for="html">Yes</label> <br>
              </div>
              <div class="input__wrapper">
                     <input type="radio"
                            id="memory"
                            name="front_flash"
                            :value="false"
                            v-model="product.camera.frontflashlight">
                     <label for="memory">No</label><br>
              </div>
       </div>
       <div class="checkbox__wrapper">
              <div class="input__wrapper">
                     <p for="card"
                        id="card">Back Flash Light:</p>
                     <input type="radio"
                            id="html"
                            name="back__flash"
                            :value="true"
                            v-model="product.camera.backflashlight">
                     <label for="html">Yes</label> <br>
              </div>
              <div class="input__wrapper">
                     <input type="radio"
                            id="html"
                            name="back__flash"
                            :value="false"
                            v-model="product.camera.backflashlight">
                     <label for="html">No</label> <br>
              </div>
       </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useproductStore } from '@/stores/product.store'
import { Field, ErrorMessage } from 'vee-validate'

export default defineComponent({
       components: { Field, ErrorMessage },
       setup()
       {
              const { product } = useproductStore()

              return { product }
       },
})
</script>
<style scoped lang="scss">
.checkbox__wrapper {
       display: flex;
       gap: 16p;
}
</style>