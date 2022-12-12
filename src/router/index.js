import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

import { decode } from '@/_helpers/auth_guard'
import { simpleDecode } from '@/_helpers/auth_guard.js'
import { decodeAdmin } from '../_helpers/auth_guard'


import { PublicLayout, HomeView, TechnoView, TestFormView, 
  ThanksView, ProjectCardView, PresentationView  } from '../views/public'

import { ThanksAdminView, DashboardView, UserUpdatedView, UserIndexView,
UserEditView, UserAddView, AdminLayout} from '../views/admin'

import { SignupView, LoginView, UserAccountView } from '../views/auth'

const routes = [
    // routes publiques 
    {
      path : '/',
      name: 'public',
      component: PublicLayout,
      children : [
        { path: '/', name: 'Home view', component: HomeView },
        { path: '/stack', name: 'stack', component: TechnoView},
        { path: '/contact', name: 'contact', component: TestFormView },
        { path: '/thanks', name: 'thanks', component : ThanksView },
        {path: '/login', name: 'Login', component : LoginView},
        { path: '/signup', name: 'Signup', component : SignupView},
        { path: '/presentation', name : 'Presentation', component : PresentationView }
        
      ],

    },
    // routes admin 
    {
      path : "/user",
      name : 'user',
      component : PublicLayout,
      beforeEnter : (to) =>{
        decode();
      },
      children : [
        { path: 'projets', name: 'perso', component: ProjectCardView},
        { path: 'account', name: 'Account', component : UserAccountView},
]
    },

    {
      path: '/admin',
      name: 'admin',
      component : AdminLayout,
      children : [
        { path : 'usercreated', name : 'userCreated', component : ThanksAdminView},
        { path : 'dashboard', name :"dashboard", component : DashboardView},
        {path : 'dashboard/userUpdated', name : 'UserUpdated', component : UserUpdatedView},
        { path : 'dashboard/index', name : "UserIndex", component : UserIndexView },
          //  ? permet de rendre un params optionnel
        { path : 'dashboard/edit/:id(\\d+)?', name : "uEdit", props : true, component : UserEditView },
        // { path : 'dashboard/custom/:id(\\d+)?', name : "uCustom", props : true, component : () => import ('@/views/admin/users/UserCustom.vue') },
        { path : 'dashboard/add', name : "add", component : UserAddView },
        {path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' // ou component : NotFound
}
      ],
      
    },

    
    {path: '/:pathMatch(.*)*', redirect: '/'  }

   ]


const router = createRouter({
  history: createWebHistory('/'),
  routes})


// verouillage de la partie admin 
router.beforeEach( (to, from, next) => {
  console.log(to.matched[0].name)
  if(to.matched[0].name == 'admin'){
    decodeAdmin();
  }
  next();
})



export default router
