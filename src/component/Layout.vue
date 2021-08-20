<template>
    <router-view></router-view>
    <Loading></Loading>
</template>

<script>
import Loading from './Loading.vue'

export default {
    name: 'LayoutComponent',
    components: {
        Loading
    }
}
</script>
