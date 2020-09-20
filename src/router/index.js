import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Products from "@/views/Products";
import Users from "@/views/Users";
import Brands from "@/views/Brands";
import Category from "@/views/Category";
import Groups from "@/views/Groups";
import Report from "@/views/Report";
import Pending from "@/views/Pending";
import Settings from "@/views/Settings";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
   {
     path: '/users',
     name: 'users',
     component: Users,
   },
  {
     path: '/groups',
     name: 'groups',
     component: Groups,
   },
   {
     path: '/brands',
     name: 'brands',
     component: Brands,
   },
   {
     path: '/category',
     name: 'category',
     component: Category,
   },
   {
     path: '/products',
     name: 'products',
     component: Products,
   },
   {
     path: '/pending',
     name: 'pending',
     component: Pending,
   },
   {
     path: '/report',
     name: 'report',
     component: Report,
   },
   {
     path: '/settings',
     name: 'settings',
     component: Settings,
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
