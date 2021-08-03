<template>
    <nav class="level">
        <div class="level-item is-justify-content-flex-start">
            <span class="icon is-large bar">
                <i class="fas fa-bars fa-2x"></i>
            </span>
        </div>
        <div class="level-item is-justify-content-center">
            <figure class="image is-48x48">
                <img :src="logo" alt="Logo" />
            </figure>
        </div>
        <div class="level-item is-justify-content-flex-end">
            <div class="dropdown is-right" :class="[ isAvatar ? 'is-active' : '' ]">
                <div class="dropdown-trigger">
                    <figure class="image is-48x48 avatar" @click="onAvatar" aria-controls="avatar-menu">
                        <img class="is-rounded" :src="avatar" alt="Avatar" />
                    </figure>
                </div>
                <div class="dropdown-menu" id="avatar-menu" role="menu">
                    <div class="dropdown-content">
                    <a href="#" class="dropdown-item">更新资料</a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">退出登录</a>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
import avatar from '../asset/avatar.jpg'
import logo from '../asset/logo.svg'
import { ref } from 'vue'

export default {
    name: 'HeaderComponent',
    data () {
        return {
            avatar,
            logo
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
    border-bottom: 1px solid #DADCE0

    .bar,
    .avatar
        cursor: pointer
</style>
