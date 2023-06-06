<template>
    <div class="sidebar__overlay"
         :class="{ 'open': showSidebar }"
         @click="$emit('toggleSidebar')">
        <div class="main__sidebar"
             :class="{ 'open': showSidebar }">
            <div class="sidebar-content"
                 v-show="showSidebar">
                <div class="user__box">
                    <img height=""
                         width="130"
                         :src="getImageUrl('logo.svg', 'svg')"
                         alt="">
                    <button class="btn btn__login">Login</button>
                </div>
                <div class="sidebar__categories">
                    <categoryList />
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import utilService from '@/services/util.service';
import categoryList from '@/components/sidebar-categories.vue';

export default defineComponent({
    components: { categoryList },
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
    }

    .main__sidebar {
        height: 100%;
        background-color: white;
        transform: translateX(-200px);
        transition: transform 0.5s ease-in-out;


        &.open {
            width: 358px;
            transform: translateX(0);
            transition: transform 0.5s ease-in-out;
        }

        .sidebar-content {
            transition: opacity 0.3s ease-in-out;
            opacity: 1;
            height: 100%;
            overflow: auto;
        }

        .sidebar-content[v-show] {
            opacity: 0;
            pointer-events: none;
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

        .sidebar__categories {
            padding: 32px;
        }
    }
}
</style>