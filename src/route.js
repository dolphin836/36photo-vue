import {createRouter, createWebHistory} from 'vue-router'

const Layout = () => import('./component/Layout.vue')
const CommonLayout = () => import('./component/CommonLayout.vue')
const FmLayout = () => import('./component/FmLayout.vue')
const Home = () => import('./page/Home.vue')
const Sns = () => import('./page/Sns.vue')
const Fm = () => import('./page/Fm.vue')
const VideoList = () => import('./page/Video/List.vue')
const VideoView = () => import('./page/Video/View.vue')
const Film = () => import('./page/Film.vue')
const Photo = () => import('./page/Photo.vue')
const Book = () => import('./page/Book.vue')
const Text = () => import('./page/Text.vue')
const Awesome = () => import('./page/Awesome.vue')
const Game = () => import('./page/Game.vue')
const Work = () => import('./page/Work.vue')
const Blog = () => import('./page/Blog.vue')
const Note = () => import('./page/Note.vue')
const Open = () => import('./page/Open.vue')
// 路由配置
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: CommonLayout,
                children: [
                    {
                        path: '',
                        name: 'Home',
                        component: Home
                    },
                    {
                        path: 'sns',
                        name: 'Sns',
                        component: Sns,
                        meta: {
                            text: '动态',
                            icon: 'fa fa-user-circle',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'video',
                        name: 'VideoList',
                        component: VideoList,
                        meta: {
                            text: '视频',
                            icon: 'fab fa-youtube',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'video/:code',
                        name: 'VideoView',
                        component: VideoView,
                        props: true
                    },
                    {
                        path: 'film',
                        name: 'Film',
                        component: Film,
                        meta: {
                            text: '电影',
                            icon: 'fa fa-film',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'photo',
                        name: 'Photo',
                        component: Photo,
                        meta: {
                            text: '照片',
                            icon: 'fa fa-camera',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'book',
                        name: 'Book',
                        component: Book,
                        meta: {
                            text: '阅读',
                            icon: 'fa fa-tags',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'text',
                        name: 'Text',
                        component: Text,
                        meta: {
                            text: '语录',
                            icon: 'fa fa-clone',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'awesome',
                        name: 'Awesome',
                        component: Awesome,
                        meta: {
                            text: '导航',
                            icon: 'fab fa-chrome',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'game',
                        name: 'Game',
                        component: Game,
                        meta: {
                            text: '游戏',
                            icon: 'fab fa-steam',
                            group: 'LIFE'
                        }
                    },
                    {
                        path: 'work',
                        name: 'Work',
                        component: Work,
                        meta: {
                            text: '简历',
                            icon: 'fa fa-id-badge',
                            group: 'WORK'
                        } 
                    },
                    {
                        path: 'blog',
                        name: 'Blog',
                        component: Blog,
                        meta: {
                            text: '博客',
                            icon: 'fab fa-wordpress',
                            group: 'WORK'
                        }
                    },
                    {
                        path: 'note',
                        name: 'Note',
                        component: Note,
                        meta: {
                            text: '笔记',
                            icon: 'fa fa-bookmark',
                            group: 'WORK'
                        }
                    },
                    {
                        path: 'open',
                        name: 'Open',
                        component: Open,
                        meta: {
                            text: '开源',
                            icon: 'fab fa-linux',
                            group: 'WORK'
                        }
                    }
                ]
            },
            {
                path: '/fm',
                component: FmLayout,
                children: [
                    {
                        path: '',
                        name: 'Fm',
                        component: Fm,
                        meta: {
                            text: '音乐',
                            icon: 'fa fa-headphones',
                            group: 'LIFE'
                        }
                    }
                ]
            }
        ]
    }
]
// 创建路由
const route = createRouter({
    history: createWebHistory(),
    routes: routes
})

export { route, routes } 
