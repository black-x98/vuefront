import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Products from "@/views/Products";
import Users from "@/views/Users";
import Test from "@/views/testtabs";

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
        path: '/test',
        name: 'test',
        component: Test,
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
