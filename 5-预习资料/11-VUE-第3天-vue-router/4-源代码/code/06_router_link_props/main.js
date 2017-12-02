//1:引入Vue
import Vue from 'vue/dist/vue.js'; 
//webpack打包是基于node的，所以，当我们写上vue则是根据node_mudules查找
//2:引入VueRouter
import VueRouter from 'vue-router/dist/vue-router.js';

import App from './App.js';
import List from './List.js';
import Detail from './Detail.js';


//3:安装插件
Vue.use(VueRouter);
//4:创建新的路由对象
var router = new VueRouter({
    //5:配置路由规则
    routes:[
        { name:'list',path:'/list',component:List},
        // 查询字符串
        { name:'detail',path:'/detail',component:Detail},
        // path方式
        { name:'detail2',path:'/detail/:id2',component:Detail}
    ]
});
//6:启动new Vue，并将配置好的理由对象交给Vue的options
new Vue({
    el:'#app',
    render:c=>c(App),
    router,  //router:router
})
//7:app.js中留坑