import { createRouter, createWebHistory } from 'vue-router'

import logIn from "@/pages/Login.vue"
import DashboardLayout from  "@/Layout/DashboardLayout.vue"
import Dashboard from "@/pages/Dashboard.vue"

const routes= [
    {
        path:"/",
        component : logIn
    },
    {
        name: 'Dashboard',
        path : "/Dashboard",
        component : Dashboard,
        meta : {
            layout : DashboardLayout
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  
  
  
  export default router