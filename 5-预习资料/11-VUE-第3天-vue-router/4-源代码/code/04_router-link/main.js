import Vue from '../node_modules/vue/dist/vue.js';
import VueRouter from '../node_modules/vue-router/dist/vue-router.js';

import Music from './Music.js';
import Movie from './Movie.js';
import App from './App.js';


//安装插件，注册一些全局组件，给this.挂载属性提供功能
Vue.use(VueRouter);

//创建路由对象，并配置路由规则
var myRouter = new VueRouter({
    routes:[
    //一条条的路由规则，其是一个对象
        { path:'/mymusic',component:Music},
        { path:'/movie',component:Movie},
    ]
});



//将规则交给Vue
window.vm = new Vue({  //Vue.prototye.$route对象有了
    router:myRouter,
    el:'#app',
    render:c=>c(App)
})