import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

import Home from './Home.js';
import Home2 from './Home2.js';
import App from './App.js';



Vue.use(VueRouter);

var router = new VueRouter();

//设置守卫
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from);
    //假设判断用户是否登录了
    if(to.meta.checkLogin){
        //假设没有登录
        next(false);
    }else{
        next(); //不论如何放行
    }

});

//配置路由规则
router.addRoutes([
    // { path: '/', redirect: { name: 'home' } },
    {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
            checkLogin: true
        }
    }, 
    {
        name: 'home2',
        path: '/home2',
        component: Home2
    }
]);

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})