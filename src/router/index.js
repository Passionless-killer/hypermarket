import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
const home=()=>import('views/home.vue')
const catecary=()=>import('views/catecary.vue')
const profile=()=>import('views/profile.vue')
const buycar=()=>import('views/buycar.vue')
const detail=()=>import('views/detail.vue')
const routes=[
    {
        path:'',
        redirect:home
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/catecary',
        component:catecary
    },
    {
        path:'/buycar',
        component:buycar
    },
    {
        path:'/profile',
        component:profile
    },
    {
        path:'/detail',
        component:detail
    }
]
const router=new vueRouter({
    routes,
    mode:'history'
})
export default router