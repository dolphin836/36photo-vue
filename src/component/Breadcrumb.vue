<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
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