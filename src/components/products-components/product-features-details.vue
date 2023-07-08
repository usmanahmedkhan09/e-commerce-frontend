<template>
    <section class="features">
        <div class="features__title">
            <p>Highlights</p>
        </div>
        <div class="features__body">
            <SpecificationsVue />
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SpecificationsVue from './FeaturesComponent/specifications.vue'

export default defineComponent({
    components: { SpecificationsVue },
    setup()
    {
        return {}
    },
})
</script>
<style lang="scss" scoped>
.features {
    padding: 30px 0;

    &__title {
        margin: 0 auto;
        max-width: 124rem;
        position: relative;
        width: 100%;

        p {
            font-weight: 500;
        }
    }
}
</style>
