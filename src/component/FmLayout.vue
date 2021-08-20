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
        </main>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Header from './Header.vue'

export default {
    name: 'FmLayoutComponent',
    components: {
        Nav,
        Header
    }
}
</script>
