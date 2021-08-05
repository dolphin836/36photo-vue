<template>
    <div class="is-flex is-flex-direction-row app">
        <Nav></Nav>
        <main class="is-flex is-flex-direction-column main">
            <Header></Header>
            <div class="page">
                <!-- <Breadcrumb></Breadcrumb> -->
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
import Breadcrumb from './Breadcrumb.vue'
import Footer from './Footer.vue'
import { ref, onMounted } from 'vue'

export default {
    name: 'CommomLayoutComponent',
    components: {
        Nav,
        Header,
        Breadcrumb,
        Footer
    },
    setup () {
        const isLoading = ref(true)
        // 最多 2 秒后关闭 Load 动画
        setTimeout(function () {
            isLoading.value = false
        }, 2000)

        onMounted(() => {
            // 监听 Load 事件，关闭 Load 动画
            window.addEventListener('load', () => {
                isLoading.value = false
            }, true)
        })

        return {
            isLoading
        }
    }
}
</script>

<style lang="sass" scoped>
.app
    min-width: 1280px

    .main
        flex: 1
        min-height: 100vh

        .page
            flex: 1
</style>
