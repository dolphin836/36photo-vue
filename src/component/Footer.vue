<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p class="is-size-7 has-text-dark mb-2">
                <span class="icon is-small"><i class="far fa-copyright"></i></span>
                2010 - {{ new Date().getFullYear() }}
                <a href="https://haibing.site">海兵大侠</a>
            </p>
            <p class="is-size-7 mb-0 has-text-grey">
                <a href="https://beian.miit.gov.cn" class="has-text-grey" target="_blank" rel="noopener noreferrer">苏 ICP 备 15001763 号 - 4</a>
                <span class="pl-2">上海市闵行区春东路 689 号</span>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style lang="sass" scoped>
.footer
    border-top: 1px solid hsl(0, 0%, 86%)
</style>
