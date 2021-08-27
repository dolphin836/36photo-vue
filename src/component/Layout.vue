<template>
    <router-view></router-view>
    <Loading></Loading>
    <BackTop></BackTop>
    <Player></Player>
</template>

<script>
import Loading from './Loading.vue'
import BackTop from './BackTop.vue'
import Player from './Player.vue'

export default {
    name: 'LayoutComponent',
    components: {
        Loading,
        BackTop,
        Player
    }
}
</script>
