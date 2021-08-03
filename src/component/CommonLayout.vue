<template>
    <div class="app">
        <Nav></Nav>
        <main class="main">
            <Header></Header>
            <div class="content">
                <router-view></router-view>
            </div>
            <Footer></Footer>
        </main>
    </div>
    <div class="pageloader" :class="[ isLoading ? 'is-active' : '' ]">
        <span class="title">Loading</span>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import { ref } from 'vue'

export default {
    name: 'CommomLayoutComponent',
    components: {
        Nav,
        Header,
        Footer
    },
    setup () {
        const isLoading = ref(false)
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

    .main
        flex: 1
        display: flex
        min-height: 100vh
        flex-direction: column

        .content
            flex: 1
</style>
