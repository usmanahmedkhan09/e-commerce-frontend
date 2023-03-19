<template>
  <component :is="layout"> </component>
</template>
<script lang="ts">
import { defineComponent, watch, ref, markRaw, computed } from 'vue'
import { useRoute } from 'vue-router'
import publicLayout from './layouts/public.vue'
import privateLayout from './layouts/private/private.vue'

export default defineComponent({
  components: { publicLayout, privateLayout },
  setup()
  {
    const route = useRoute()
    const layout = computed(() =>
    {
      let { meta } = route
      return meta.layout == 'private' ? markRaw(privateLayout) : markRaw(publicLayout)
    })
    // watch(
    //   () => route.meta,
    //   async meta =>
    //   {
    //     try
    //     {
    //       const component = await import(`@/layouts/${meta.layout}.vue`)
    //       layout.value = component.default ?? publicLayout
    //       console.log(layout.value)
    //     } catch (error)
    //     {
    //       layout.value = publicLayout
    //     }
    //   },
    //   { immediate: true }
    // )
    return {
      layout
    }
  },
})
</script>
