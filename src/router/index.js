import { createRouter, createWebHistory } from 'vue-router'

import logIn from "@/pages/Login.vue"
import DashboardLayout from "@/Layout/DashboardLayout.vue"
import Dashboard from "@/pages/Dashboard.vue"
import contractList from "@/pages/contractList"
import appendContract from "@/pages/appendContract.vue"

const routes = [
    {
        path: "/",
        component: logIn
    },
    {
        name: 'Dashboard',
        path: "/Dashboard",
        component: Dashboard,
        meta: {
            layout: DashboardLayout
        }
    },
    {
        name: 'ContractList',
        path: "/ContractList",
        component: contractList,
        meta: {
            layout: DashboardLayout
        }
    },
    {
        name: 'appendContract',
        path: "/appendContract",
        component: appendContract,
        meta: {
            layout: DashboardLayout
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})




export default router