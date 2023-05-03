<template>
    <component v-if="icon"
               :is="icon"
               class="fill-current" />
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props)
    {
        const icon = defineAsyncComponent(() =>
            import(`../assets/svg/${props.name}.svg`)
        );
        return { icon }
    },
})
</script>
