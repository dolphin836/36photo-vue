<template>
    <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
            <li><router-link :to="{ name: 'Home'}">Home</router-link></li>
            <li><router-link :to="{ name: 'About'}">About</router-link></li>
        </ul>
    </aside>
</template>

<script>
export default {
  name: 'NavComponent'
}
</script>
<style lang="sass" scoped>
.menu
    width: 256px
    min-height: 100vh
</style>
