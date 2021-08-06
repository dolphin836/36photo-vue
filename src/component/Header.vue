<template>
    <nav class="level is-mobile">
        <div class="level-left">
            <div class="level-item">
                <span @click="back" class="icon-text is-large is-clickable">
                    <span class="icon">
                        <i class="fa fa-arrow-alt-circle-left"></i>
                    </span>
                    <span>Back</span>
                </span>
                <span @click="next" class="icon-text is-large is-clickable ml-4">
                    <span>Next</span>
                    <span class="icon">
                        <i class="fa fa-arrow-alt-circle-right"></i>
                    </span>  
                </span>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <div class="dropdown is-right is-hoverable">
                    <div class="dropdown-trigger">
                        <figure class="image is-48x48 is-clickable" aria-controls="avatar-menu">
                            <img class="is-rounded" :src="avatar" alt="Avatar" />
                        </figure>
                    </div>
                    <div class="dropdown-menu" id="avatar-menu" role="menu">
                        <div class="dropdown-content">
                            <router-link class="dropdown-item" :to="{ name: 'Home'}">
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fa fa-info-circle"></i>
                                    </span>
                                    <span>设置</span>
                                </span>
                            </router-link>
                            <hr class="dropdown-divider">
                            <a class="dropdown-item">
                                <span class="icon-text">
                                    <span class="icon">
                                        <i class="fa fa-sign-out-alt"></i>
                                    </span>
                                    <span>退出</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import avatar from '../asset/avatar.jpg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: 'HeaderComponent',
    data () {
        return {
            avatar
        }
    },
    setup () {
        const router = useRouter()
        const isAvatar = ref(false) // 头像的下拉菜单是否显示
        // 点击头像
        const onAvatar = () => {
            isAvatar.value = ! isAvatar.value
        }
        // Back
        const back = () => {
            router.back()
        }
        // Next
        const next = () => {
            router.forward()
        }

        return {
            isAvatar,
            onAvatar,
            back,
            next
        }
    }
}
</script>
<style lang="sass" scoped>
.level
    padding: .5rem 1rem
    border-bottom: 1px solid hsl(0, 0%, 86%)
    margin-bottom: 1rem
</style>
