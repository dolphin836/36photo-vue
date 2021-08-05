<template>
    <nav class="level">
        <div class="level-left">
            <div class="level-item">
                <span class="icon is-large is-clickable">
                    <i class="fas fa-bars fa-2x"></i>
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

export default {
    name: 'HeaderComponent',
    data () {
        return {
            avatar
        }
    },
    setup () {
        const isAvatar = ref(false) // 头像的下拉菜单是否显示
        // 点击头像
        const onAvatar = () => {
            isAvatar.value = ! isAvatar.value
        }

        return {
            isAvatar,
            onAvatar
        }
    }
}
</script>
<style lang="sass" scoped>
.level
    padding: .5rem 1rem
    border-bottom: 1px solid hsl(0, 0%, 86%)
</style>
