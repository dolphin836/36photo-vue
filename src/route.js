import {createRouter, createWebHistory} from 'vue-router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const CommonLayout = () => import('./component/CommonLayout.vue')
const Home = () => import('./page/Home.vue')
const About = () => import('./page/About.vue')
// 路由配置
const routes = [
  {
    path: '/',
    component: CommonLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      }
    ]
  }
]
// 创建路由
const route = createRouter({
  history: createWebHistory(),
  routes: routes
});
// 全局前置守卫
route.beforeEach((to, from, next) => {
  nProgress.start();
  next();
});
// 全局后置守卫
route.afterEach(() => {
  nProgress.done();
});

export default route;
