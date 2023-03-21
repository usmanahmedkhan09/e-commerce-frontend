<template>
  <component :is="layout"> </component>
</template>
<script lang="ts">
import { defineComponent, watch, ref, markRaw, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import publicLayout from './layouts/public.vue'
import privateLayout from './layouts/private/private.vue'
import storageService from './services/storage.service'

export default defineComponent({
  components: { publicLayout, privateLayout },
  setup()
  {
    const route = useRoute()
    const token = ref()
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
