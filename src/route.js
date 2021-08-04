import {createRouter, createWebHistory} from 'vue-router'

const CommonLayout = () => import('./component/CommonLayout.vue')
const Home = () => import('./page/Home.vue')
const Sns = () => import('./page/Sns.vue')
const Fm = () => import('./page/Fm.vue')
const Video = () => import('./page/Video.vue')
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
        component: Sns
      },
      {
        path: 'fm',
        name: 'Fm',
        component: Fm
      },
      {
        path: 'video',
        name: 'Video',
        component: Video
      },
      {
        path: 'film',
        name: 'Film',
        component: Film
      },
      {
        path: 'photo',
        name: 'Photo',
        component: Photo
      },
      {
        path: 'book',
        name: 'Book',
        component: Book
      },
      {
        path: 'text',
        name: 'Text',
        component: Text
      },
      {
        path: 'awesome',
        name: 'Awesome',
        component: Awesome
      },
      {
        path: 'game',
        name: 'Game',
        component: Game
      },
      {
        path: 'work',
        name: 'Work',
        component: Work
      },
      {
        path: 'blog',
        name: 'Blog',
        component: Blog
      },
      {
        path: 'note',
        name: 'Note',
        component: Note
      },
      {
        path: 'open',
        name: 'Open',
        component: Open
      }
    ]
  }
]
// 创建路由
const route = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default route
