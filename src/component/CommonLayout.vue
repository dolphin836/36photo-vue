<template>
    <div class="app">
        <header class="header"></header>
        <main class="main">
            <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
    <div class="pageloader" :class="[ isLoading ? 'is-active' : '' ]">
        <span class="title">Loading</span>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import { ref } from 'vue'

export default {
    name: 'CommomLayoutComponent',
    components: {
        Footer
    },
    setup () {
        const isLoading = ref(true)
        // Load 动画
        setTimeout(function () {
            isLoading.value = false
        }, 1000)

        return {
            isLoading
        }
    }
}
</script>

<style lang="sass" scoped>
.app
    display: flex
    min-height: 100vh
    flex-direction: column

    .main
        flex: 1
</style>
