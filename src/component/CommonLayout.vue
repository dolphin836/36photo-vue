<template>
    <div class="is-flex is-flex-direction-row app">
        <Nav></Nav>
        <main class="is-flex is-flex-direction-column main">
            <Header></Header>
            <div class="page">
                <div class="container is-fluid pb-4">
                    <router-view></router-view>
                </div>
            </div>
            <Footer></Footer>
        </main>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'CommomLayoutComponent',
    components: {
        Nav,
        Header,
        Footer
    }
}
</script>
