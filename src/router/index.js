import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from "@/components/first"
import detail from "@/components/detail"


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/first',
            name: 'first',
            component: first
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        }
    ]
})