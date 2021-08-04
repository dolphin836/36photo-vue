<template>
    <figure class="image">
        <img src="../asset/1.jpg" alt="" />
    </figure>
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
