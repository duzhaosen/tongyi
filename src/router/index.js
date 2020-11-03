import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/list/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/list',
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('../views/shopping/Shopping.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My/My.vue')
  },
  {
    path: '/viewinfo',
    name: 'Viewinfo',
    component: () => import('../views/Viewinfo.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to,from,next) => {
  document.title = to.name
  next();
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
