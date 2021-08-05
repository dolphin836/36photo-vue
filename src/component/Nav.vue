<template>
    <aside class="menu">
        <router-link :to="{ name: 'Home'}">
            <figure class="image is-48x48 is-clickable logo">
                <img :src="logo" alt="Logo" />
            </figure>
        </router-link>
        <p class="menu-label">LIFE</p>
        <ul class="menu-list">
            <li>
                <router-link :to="{ name: 'Sns'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-user-circle"></i>
                        </span>
                        <span>动态</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Fm'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-headphones"></i>
                        </span>
                        <span>音乐</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'VideoList'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fab fa-youtube"></i>
                        </span>
                        <span>视频</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Film'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-film"></i>
                        </span>
                        <span>电影</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Photo'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-camera"></i>
                        </span>
                        <span>照片</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Book'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-tags"></i>
                        </span>
                        <span>阅读</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Text'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-clone"></i>
                        </span>
                        <span>语录</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Awesome'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fab fa-chrome"></i>
                        </span>
                        <span>导航</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Game'}">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fab fa-steam" active-class="has-background-primary has-text-white"></i>
                        </span>
                        <span>游戏</span>
                    </span>
                </router-link>
            </li>
        </ul>
        <p class="menu-label">WORK</p>
        <ul class="menu-list">
            <li>
                <router-link :to="{ name: 'Work'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-id-badge"></i>
                        </span>
                        <span>简历</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Blog'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fab fa-wordpress"></i>
                        </span>
                        <span>博客</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Note'}" active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-bookmark"></i>
                        </span>
                        <span>笔记</span>
                    </span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Open'}" exact-active-class="has-background-primary has-text-white">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fab fa-linux"></i>
                        </span>
                        <span>开源</span>
                    </span>
                </router-link>
            </li>
        </ul>
        <p class="menu-label">LINK</p>
        <ul class="menu-list">
            <li>
                <a href="#">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-link"></i>
                        </span>
                        <span>链接</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fa fa-link"></i>
                        </span>
                        <span>链接</span>
                    </span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
import logo from '../asset/logo.svg'

export default {
    name: 'NavComponent',
    data () {
        return {
            logo
        }
    }
}
</script>
<style lang="sass" scoped>
.menu
    width: 256px
    min-height: 100vh
    padding: 1rem
    border-right: 1px solid hsl(0, 0%, 86%)

    .logo
        margin: 0 auto
        margin-bottom: 1rem
</style>
