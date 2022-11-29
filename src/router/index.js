

import { createRouter, createWebHashHistory, createMemoryHistory } from 'vue-router'
import PublicLayout from '@/views/public/Layout.vue'
import AdminLayout from '@/views/admin/Layout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import { decode } from './functions.js'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [

    {
      path : '/',
      name: 'public',
      component: PublicLayout,
      children : [
        { path: '/', name: 'Home view', component: () => import('../views/public/HomeView.vue')},
        { path: '/login', name: 'Login', component: () => import('../views/public/LoginView.vue')},
        { path: '/stack', name: 'stack',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/public/TechnoView.vue')
        },
        { path: '/projets', name: 'perso', component: () => import('../views/public/ProjetCardView.vue') },
        { path: '/contact', name: 'caca', component: () => import('../views/public/testFormVue.vue') },
        { path: '/thanks', name: 'thanks', component: () => import('../views/public/ThanksView.vue') },
        
      ]
    },

    {
      path: '/admin',
      name: 'admin',
      component : AdminLayout,
      children : [
        { path : 'dashboard', name :"dashboard", component : () => import('@/views/admin/Dashboard.vue'), beforeEnter : decode
        },
        { path : 'dashboard/index', name : "index", component : () => import ('@/views/admin/users/UserIndex.vue') },
        { path : 'dashboard/edit/:id(\\d+)', name : "edit", props : true, component : () => import ('@/views/admin/users/UserEdit.vue') },
        { path : 'dashboard/add', name : "add", component : () => import ('@/views/admin/users/UserAdd.vue') },
        {
          path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' // ou component : NotFound
        }

      ]
    },

    {
        path: '/login', name: 'Login', component : () => import ('@/views/auth/Login.vue')
    },

    {
      path: '/:pathMatch(.*)*', redirect: '/' // ou component : NotFound
    }

   ]
})

export default router
