import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

import Home from './Home.js';
import App from './App.js';

//引入SPA三巨头
import HeaderVue from './HeaderVue.js';
import BodyVue from './BodyVue.js';
import FooterVue from './FooterVue.js';


//安装插件
Vue.use(VueRouter);  //全局组件，给Vue原型挂载属性，继承于其的对象就用该属性

//创建路由对象
var router = new VueRouter(
{
    routes:[{ name:'home',path:'/home',component:Home  } ]
}
);
//通过API加入路由
router.addRoutes([
    //component:一个组件对象
    //components:{ 坑1:组件1,坑2:组件2}
    { name:'home2',path:'/home2',components:{
            'header':FooterVue,
            'body':BodyVue,
            'footer':HeaderVue
        }
    },
]);
router.addRoutes([{ name:'home3',path:'/home3',components:{
            'header':HeaderVue,
            'body':BodyVue,
            'footer':FooterVue,
            'default':{
                template:`<div>我是无名坑default</div>`
            }
        }
    }])

new Vue({
    el:'#app',
    router,
    render:c=>c(App)
});