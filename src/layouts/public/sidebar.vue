<template>
    <div class="sidebar__overlay"
         :class="{ 'open': showSidebar }"
         @click="$emit('toggleSidebar')">
        <div class="main__sidebar"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        showSidebar: {
            type: Boolean,
            required: true
        }
    },
    setup(props)
    {
        return {}
    },
})
</script>
<style lang="scss" scoped>
.sidebar__overlay {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.7);

    &.open {
        width: 100%;
        // transition: all .5s ease-in-out;
    }
}
</style>