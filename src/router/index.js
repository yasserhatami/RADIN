import { createRouter, createWebHistory } from 'vue-router'

import logIn from "@/pages/Login.vue"

const routes= [
    {
        path:"/",
        component : logIn
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  
  
  
  export default router