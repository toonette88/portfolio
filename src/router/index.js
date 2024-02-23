import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Page404 from '@/views/Page404.vue'

const routes = [
    {path:'/', name: 'Home', component:Home},
    {path:'/page404', name: 'Page404', component:Page404}
]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router