import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

import Login from './Login.js';
import App from './App.js';
import MusicList from './MusicList.js';



Vue.use(VueRouter);

var router = new VueRouter();

//设置守卫
router.beforeEach((to, from, next) => {
    //假设判断用户是否登录了
    if(to.meta.checkLogin){
        
        var permissions = JSON.parse(window.localStorage.getItem('permissions')||'[]');

        //向服务器发起请求，验证之前是否登录了，问问是否有session上的user
        //ajax向服务器发起请求，问问req.session上有没有user，比较安全的方式
        if(permissions.indexOf(to.fullPath) != -1){
            next();
        }else{
            alert('未登录不能访问');
            next({
                name:'login'
            });
        }

    }else{
        next(); //不论如何放行
    }

});

//配置路由规则
router.addRoutes([
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name:'list',
        path:'/music/list-music',
        component:MusicList,
        meta:{
            checkLogin:true
        }
    }

]);

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})