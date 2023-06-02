<template>
    <div class="sidebar__overlay"
         :class="{ 'open': showSidebar }"
         @click="$emit('toggleSidebar')">
        <div class="main__sidebar"
             :class="{ 'open': showSidebar }">
            <div class="user__box">
                <img height=""
                     width="130"
                     :src="getImageUrl('logo.svg', 'svg')"
                     alt="">
                <button class="btn btn__login">Login</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service';

export default defineComponent({
    props: {
        showSidebar: {
            type: Boolean,
            required: true
        }
    },
    setup(props)
    {
        return { getImageUrl: utilService.getImageUrl }
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

    .main__sidebar {
        width: 0;
        height: 100%;
        background-color: white;

        &.open {
            width: 358px;
            transition: all .5s ease-in-out;
        }

        .user__box {
            display: flex;
            flex-direction: column;
            background: var(--color-primary-blue);
            padding: 70px 32px;

            .btn__login {
                max-width: 110px;
                margin-top: 24px;
                font-weight: 400;
                padding: 5px
            }
        }
    }
}
</style>