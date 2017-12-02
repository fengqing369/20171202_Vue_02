import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

import App from './App.js';
import Home from './Home.js';
import Movie from './Movie.js';
import Music from './Music.js';



//安装插件
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter();

router.addRoutes([

    { name:'home',path:'/home',component:Home, children:[
    // /music就是这个路由
    // /movie就是这个路由
    // 如果不加/  则以当前路径为相对基础路径再加上自己的路径
            { name:'home.music',path:'music',component: Music },
            { name:'home.movie',path:'movie',component: Movie },
    ] },
]);


new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})
