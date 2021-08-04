<template>
    <h1>Home</h1>
</template>

<script>
import store from '../store'

export default {
    name: 'Home',
    setup() {
        store.UPDATE_BREADCRUMB([
            {
                'name': '首页'
            }
        ])
    }
}
</script>

<style lang="sass" scoped>

</style>
