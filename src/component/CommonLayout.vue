<template>
    <div class="main">
        <div class="nav">
            <ul>
                <li>
                    <router-link :to="{ name: 'Home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'About'}">About</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommomLayoutComponent',
};
</script>

<style lang="sass" scoped>
.main
    height: auto !important
    
    .nav
        position: fixed
        top: 0
        left: 0
        z-index: 10
        background: linear-gradient(rgba(0, 0, 0, 0.5), transparent)
        width: 100%
        height: 50px

    .content
        width: 100%
        height: auto !important
</style>
