<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-home"></i>
                        </span>
                        <span>首页</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'VideoList' }">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fab fa-youtube"></i>
                        </span>
                        <span>视频</span>
                    </span>
                </router-link>
            </li>
            <li class="is-active">
                <a href="#" aria-current="page">详情</a>
            </li>
            <template v-for="(item, i) in data" :key="i">
                <li v-if="item.href">
                    <router-link :to="{ name: item.href }">{{ item.name }}</router-link>
                </li>
                <li v-else class="is-active">
                    <a href="#" aria-current="page">{{ item.name }}</a>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
import store from '../store'
import { computed } from 'vue'

export default {
    name: 'BreadcrumbComponent',
    setup() {
        const data = computed(() => store.state.BREADCRUMB)

        return {
            data
        }
    }
}
</script>
<style lang="sass" scoped>
.breadcrumb
    padding: 0 1rem
</style>