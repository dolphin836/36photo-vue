<template>
  <footer class="footer pb-6">
    <div class="content has-text-centered">
      <p class="is-size-7 has-text-dark mb-2">
        © 1985 - {{ new Date().getFullYear() }}
        <a href="https://haibing.site">海兵大侠</a>
      </p>
      <p class="is-size-7 mb-0">
        <a href="https://beian.miit.gov.cn" class="has-text-grey" target="_blank" rel="noopener noreferrer">苏 ICP 备 15001763 号 - 4</a>
      </p>
      <p class="is-size-7 has-text-grey">
        地址：上海市闵行区春东路 689 号
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>
