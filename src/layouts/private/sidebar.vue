<template>
    <section class="sidebar">
        <ul class="nav">
            <li class="nav__link"
                :class="route.isActive ? 'nav__link--active' : ''"
                v-for="(route, index) in routes"
                :key="index"
                @click="handleActiveRoute(route)">
                <router-link to=""
                             v-if="route.children?.length"></router-link>
                <font-awesome-icon class="icon"
                                   :icon="route.icon" />
                <span class="">
                    {{ route.name }}
                </span>
                <ul class="nav__link__subMenu"
                    v-if="route.children?.length && route.isActive">
                    <li class="nav__link__subMenu--link"
                        v-for="(children, index) in route.children"
                        :key="index"
                        @click.stop="">
                        <router-link :to="children.path"
                                     @click="$emit('close')">
                            <font-awesome-icon class="icon"
                                               :icon="children.icon" />
                            <span>
                                {{ children.name }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
    components: {},
    setup(props, context)
    {

        const routes = ref(
            [
                {
                    name: "products",
                    value: "products",
                    path: "/products",
                    icon: 'fa-solid fa-store',
                    isActive: false,
                    showChild: false,
                    children: [
                        {
                            name: "product list",
                            path: "/products/products-list",
                            icon: "fa-solid fa-list",
                        },
                        {
                            name: "product list",
                            path: "/products/add-products",
                            icon: "fa-solid fa-add",
                        },
                    ]
                },
                {
                    name: "categories",
                    value: "categories",
                    path: "/categories",
                    icon: 'fa-solid fa-store',
                    isActive: false,
                    showChild: false,
                },
                {
                    name: "brand",
                    value: "brand",
                    path: "/brand",
                    icon: 'fa-solid fa-store',
                    isActive: false,
                    showChild: false,
                },
                {
                    name: "series",
                    value: "series",
                    path: "/series",
                    icon: 'fa-solid fa-store',
                    isActive: false,
                    showChild: false,
                },
            ]
        )
        const handleActiveRoute = (route: any) =>
        {
            routes.value = routes.value.filter((item: any) =>
            {
                if (item.path == route.path)
                {
                    item.isActive = true;
                    ShowChildRoutes(route);
                } else
                {
                    item.isActive = false;
                }
                return item;
            });
        }

        const ShowChildRoutes = (route: any) =>
        {
            routes.value = routes.value.filter((r: any) =>
            {
                if (r.path == route.path)
                {
                    r.showChild = !r.showChild;
                    context.emit('close')
                } else
                {
                    r.showChild = false;
                }
                return r;
            });
        };

        const setInitialRoute = () =>
        {
            routes.value = routes.value.filter((route: any) =>
            {
                if (
                    route.path == useRoute().path ||
                    useRoute().path.includes(route.path)
                )
                {
                    route.isActive = true;
                    ShowChildRoutes(route);
                }
                return route;
            });
        };

        onMounted(() =>
        {
            setInitialRoute()
        })
        return { routes, handleActiveRoute }
    },
})
</script>
