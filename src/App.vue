<template>
  <component :is="layout">
  </component>
</template>
<script lang="ts">
import { defineComponent, watch, ref, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import publicLayout from './layouts/public.vue'

export default defineComponent({
  components: { publicLayout },
  setup()
  {
    const route = useRoute()
    const layout = markRaw(publicLayout)
    watch(
      () => route.meta,
      async meta =>
      {
        try
        {
          const component = await import(`@/layouts/${meta.layout}.vue`)
          layout.value = component?.default || publicLayout
        } catch (error)
        {
          layout.value = publicLayout
        }
      },
      { immediate: true }
    )
    return {
      layout
    }
  },
})
</script>
