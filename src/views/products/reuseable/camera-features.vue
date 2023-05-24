<template>
       <div class="input__wrapper">
              <div>
                     <label for="front-camera">Front Camera Size:</label>
                     <Field v-model="product.camera.frontCamera"
                            type="text"
                            class="input"
                            name="front camera"
                            id="front-camera"
                            placeholder="Enter front camera size"
                            required />
                     <ErrorMessage class="error__message"
                                   name="front camera" />
              </div>
              <div>
                     <label for="back-camera">Back Camera Size:</label>
                     <Field v-model="product.camera.backCamera"
                            type="text"
                            placeholder="Enter back camera size"
                            class="input"
                            id="back-camera"
                            name="back camera" />
                     <ErrorMessage class="error__message"
                                   name="back camera" />
              </div>
       </div>
       <div class="input__wrapper">
              <div>
                     <label for="back-video">Back Video Recording:</label>
                     <Field v-model="product.camera.backvideorecording"
                            type="text"
                            class="input"
                            id="back-video"
                            name="back video recording"
                            placeholder="Enter back video recording"
                            required />
                     <ErrorMessage class="error__message"
                                   name="back video recording" />
              </div>
              <div>
                     <label for="front-video">Front Video Recording:</label>
                     <Field v-model="product.camera.frontvideorecording"
                            type="text"
                            class="input"
                            placeholder="Enter front video recording"
                            required
                            id="front-video"
                            name="front video recording" />
                     <ErrorMessage class="error__message"
                                   name="front video recording" />
              </div>
       </div>
       <div class="input__wrapper">
              <div>
                     <label for="flash-light">Front Flashlight:</label>
                     <Field name="flashlight"
                            class="input select"
                            as="select"
                            id="flash-light"
                            v-slot="{ value }"
                            :class="{ 'active': product.camera.frontflashlight == undefined }"
                            v-model="product.camera.frontflashlight">
                            <option value=""
                                    disabled
                                    selected>Please Select One</option>
                            <option :value="true"
                                    :selected="value">Yes</option>
                            <option :value="false"
                                    :selected="value">No</option>
                     </Field>
              </div>
              <div>
                     <label for="back-flashlight">Back Flashlight:</label>
                     <Field name="flashlight"
                            id="back-flashlight"
                            class="input select"
                            as="select"
                            v-slot="{ value }"
                            :class="{ 'active': product.camera.backflashlight == undefined }"
                            v-model="product.camera.backflashlight">
                            <option value=""
                                    disabled
                                    selected>Please Select One</option>
                            <option :value="true"
                                    :selected="value">Yes</option>
                            <option :value="false"
                                    :selected="value">No</option>
                     </Field>
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