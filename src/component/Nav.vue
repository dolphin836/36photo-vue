<template>
    <aside class="menu">
        <router-link :to="{ name: 'Home'}">
            <figure class="image is-48x48 is-clickable logo">
                <img :src="logo" alt="Logo" />
            </figure>
        </router-link>
        <template v-for="(group, i) in data" :key="i">
            <p class="menu-label">{{ group.group }}</p>
            <ul class="menu-list">
                <template v-for="(route, k) in group.route" :key="k">
                    <li>
                        <router-link :to="{ name: route.name }" active-class="has-background-primary has-text-white">
                            <span class="icon-text">
                                <span class="icon">
                                    <i :class="route.icon"></i>
                                </span>
                                <span>{{ route.text }}</span>
                            </span>
                        </router-link>
                    </li>
                </template>
            </ul>
        </template>
        <p class="menu-label">LINK</p>
        <ul class="menu-list">
            <li>
                <a href="#">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-link"></i>
                        </span>
                        <span>链接</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-link"></i>
                        </span>
                        <span>链接</span>
                    </span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
import logo from '../asset/logo.svg'
import { routes } from '../route'

export default {
    name: 'NavComponent',
    data () {
        return {
            logo
        }
    },
    setup () {
        // 整理数据
        const groupMap = {}

        routes[0].children.forEach(route => {
            if (route.hasOwnProperty('meta')) {
                if (! groupMap.hasOwnProperty(route.meta.group)) {
                    groupMap[route.meta.group] = []
                }

                groupMap[route.meta.group].push({
                    name: route.name,
                    text: route.meta.text,
                    icon: route.meta.icon
                })
            }
        })
        // 转成数组
        const data = []

        for (const group in groupMap) {
            data.push({
                group: group,
                route: groupMap[group]
            })
        }

        return {
            data
        }
    }
}
</script>
<style lang="sass" scoped>
.menu
    min-height: 100vh
    padding: 1rem
    border-right: 1px solid hsl(0, 0%, 86%)

    .logo
        margin: 0 auto
        margin-bottom: 1rem

    .menu-list
        width: 5.6rem
</style>
