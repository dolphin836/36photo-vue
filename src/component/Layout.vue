<template>
    <router-view></router-view>
    <Loading></Loading>
    <BackTop></BackTop>
</template>

<script>
import Loading from './Loading.vue'
import BackTop from './BackTop.vue'

export default {
    name: 'LayoutComponent',
    components: {
        Loading,
        BackTop
    }
}
</script>
