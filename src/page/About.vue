<template>
    <h1>About</h1>
</template>

<script>
import store from '../store'

export default {
    name: 'About',
    setup() {
        store.UPDATE_BREADCRUMB([
            {
                'name': '首页',
                'href': 'Home'
            },
            {
                'name': '关于我们'
            }
        ])
    }
}
</script>
