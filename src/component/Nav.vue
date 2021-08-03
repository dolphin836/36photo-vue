<template>
    <aside class="menu">
        <p class="menu-label">General</p>
        <ul class="menu-list">
            <li><a class="is-active">Dashboard</a></li>
            <li><a>Customers</a></li>
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
