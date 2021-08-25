<template>
    <span v-if="isOpen" class="icon is-clickable has-background-grey has-text-white" @click="backTop">
        <i class="fas fa-arrow-up"></i>
    </span>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'BackTopComponent',
    setup () {
        const isOpen = ref(false)
        // 滚动事件
        const scroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

            if (scrollTop > 400) {
                isOpen.value = true
            } else {
                isOpen.value = false
            }
        }
        // 返回顶部事件
        const backTop = () => {
            const clock = setInterval(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

                const step = Math.floor(-scrollTop / 5)

                document.documentElement.scrollTop = document.body.scrollTop = scrollTop + step

                if (scrollTop === 0) {
                    clearInterval(clock)
                }
            }, 16)
        }

        onMounted(() => {
            // 监听滚动事件
            window.addEventListener('scroll', scroll)
        })

        return {
            isOpen,
            backTop
        }
    }
}
</script>
<style lang="sass" scoped>
.icon
    position: fixed
    right: 1rem
    bottom: 10rem
    width: 40px
    height: 40px
    border-radius: 20px
</style>
