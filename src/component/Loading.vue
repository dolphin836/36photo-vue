<template>
    <div class="pageloader" :class="[ isLoading ? 'is-active' : '' ]">
        <span class="title">Loading</span>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'LoadingComponent',
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
