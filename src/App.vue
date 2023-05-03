<template>
  <widget-container-modal />
  <component :is="layout"> </component>
  <h1></h1>
</template>
<script lang="ts">
import { defineComponent, watch, ref, markRaw, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import publicLayout from './layouts/public.vue'
import privateLayout from './layouts/private/private.vue'
import storageService from './services/storage.service'
import { container } from "jenesius-vue-modal";


export default defineComponent({
  components: { publicLayout, privateLayout, WidgetContainerModal: container },
  setup()
  {
    const route = useRoute()
    const token = ref()
    const isAdmin = ref(true)
    const layout = computed(() =>
    {
      let { meta } = route
      return meta.layout == 'private' || token.value ? markRaw(privateLayout) : markRaw(publicLayout)
    })

    onMounted(() =>
    {
      token.value = storageService.getProperty('token')
    })
    return {
      layout
    }
  },
})
</script>
