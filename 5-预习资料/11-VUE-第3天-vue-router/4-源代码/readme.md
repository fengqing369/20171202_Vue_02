### 准备开始
---
#### 学员反馈
 VueBus的几个方法还不太清楚。
    vm的方法
        注册事件(存函数):  vm.$on('事件名',fn)       function(n1,n2){   }
        触发事件(取函数):  vm.$emit('事件名',1,2)
        注册执行一次的事件:vm.once('事件名',fn) 
        取消事件vm.off('事件名')
    应用场景
        父向子传值通过属性
            子向父，兄弟间通信，使用vueBus来完成

 老师 ,使用Es6模版中的引入问题能在讲一下么
    ES6模块导入导出。详细的说一下

 老师 CRUD部分 更新那一块 为什么只返回他的id 不返回他的name 如果这样用findIndex行吗 删除那一块 为什么只返回他的id 就能把整个删除了
    
    ES6 找元素，找索引

    var obj = arr.find(function(ele,index,arr){
        //当return的结果为true的时候，结束遍历，并返回当前元素,false继续遍历
        return ele.id == this.updateid;

    });



 老师Vue做什么项目比较好呢

 将近一个小时才把增删改查写完,找了好多错误

  生命周期 那块 不是很明白

 老师,组件methods函数中的this以及this的父级总是弄不清楚,希望再讲下

 今天我不在

  delHero(){ 
  var findIndex = this.heros.findIndex( ele =>{ 
    return ele.id == this.delid; 
  }); 
this.heros.splice(findIndex,1); 

} 

updateHero(){ 
    var hero = this.heros.find( ele =>{ 
        return ele.id == this.updateid; 
    }); 
    hero.name = this.updatename; 
} 这两个有点不明白
#### 复习
* options

#### ES6模块
* 默认导入导出
    - 入 `import Xxx from './xxx.js';`
    - 出 `export default {};`
    - 总结: 导出随便什么数据，导入随便叫什么名字
* 声明式导入导出(将导出数据装在一个对象中)
    - 出
        + `export var num = 1;`
        + `export var num2 = 2;`
        + 直接导出已声明的变量
            * `export { num3  }`
    - 入:
        + `import {num,num2} from './xxx.js'`
        + 总结:声明式导入的时候名字，要一致


* 总结：
    - 默认导入导出，不用在意名称
    - 声明式导入导出，名称必须一致
        + 声明并导出 `export var xxx = 1;`
        + 声明后导出 `var xxx= 1; export {xxx}`
        + 导入都是根据名称来
            * `import {xxx} from './xxx.js';`
    - 全体导入
        + `import * as obj from './xxx.js';`
        + `{ default:默认导出,xxx:声明导出 }`
    - export 和 import只能在顶级作用域中，不能包含在{}中


#### 总结ES6模块
* 默认导入 `import Cal from 'cal';`  具备+-*/
    - 引入别人提供的包的入口
* 按需引入 `import {add,substract}` 具备加和减
    - 只要部分对象数据

#### 今日重点
* 路由
* 路由的核心:
    - 锚点值的改变，影响页面中局部数据的innerHTML的改变

### 路由
---
#### 路由原理
* 基于监视锚点值的改变，不刷新页面，替换页面中的局部内容

#### 基本使用
* vue中的核心插件 vue-router
* 1:在引入Vue后引入Vue-router
* 2:安装插件 (`Vue.use(VueRouter)`)
    - 全局组件
    - 挂载一些对象供我们使用 
* 3:创建一个新的路由对象
    - `var router = new VueRouter(options)`
* 4:配置路由规则
    - options:`{ routes:[ router,router,router] }`  
    - router:`{ path:'/music',component:Home  }`
    - Home表示options也就是组件对象
* 5:将配置好的路由对象，交给Vue的options
    - `new Vue({  router:router  })`
* 6:留坑(App.js template中)
    - `<router-view></router-view>`


* 引入插件，安装插件，配置规则，交给Vue，记得留坑


#### 插件安装原理
* 插件方定义install函数，接受Vue对象
* 1:使用Vue注册全局组件
* 2:给Vue原型挂载属性，提供对象的功能
    - Vue的实例，也就是vm或者组件内的this,可以直接.$route使用

#### router-link
* 是在Vue.use后，插件给我们注册的全局组件
* 使用方式:
    - 1基本: `<router-link to="/xxxx">音乐</router-link>`
    - 2对象的方式: `<router-link :to="{ name:'music'}">音乐</router-link>`
        + 给路由规则来个name属性
        + main.js中`{ name:'music',path:'/mymusic',component:Music}`
    - 匹配并生成href的机制
        + 1:通过to属性拿到对象的name，知道找那个路由规则
        + 2:根据其path属性，来生成router-link最终的href


#### 命名路由
* 一条有名字的路由规则
* main.js中`{ name:'music',path:'/mymusic',component:Music}`

#### 参数router-link
* 1:去哪里?
    - `<router-link :to="{name:'bj',query:{id:'1'}  }"></router-link>`
    - 生成href `#/beijing?id=1`
* 2:导航
    - `{ name:'bj',path:'/beijing',component:BeiJing  }`
* 3:去了干嘛（组件已经匹配后）
    - 获取路由参数，发起ajax请求，把数据渲染到页面
    - created钩子函数
        + `this.$route.query.id`

* url参数
    - 查询字符串  /beijing?id=1    req.query.id
    - path方式    /beijing/1    
    - get('/beijing/:id')规则中要声明哪一段是参数   req.params.id


* 使用path的方式
    - 1: 去哪里 
        + `<router-link :to="{ name:'detail2',params:{id2:'1'}    } ">查看详情</router-link>`
    - 2: 导航
        + ` {name:'detail2',path:'/detail/:id2',component:Detail} `
    - 3: 去了干嘛
        + 获取路由参数
        + `this.$route.params.id2`
* params方式与query方式
    - 代码区别在于param要在路由规则中体现参数放置的位置


#### vue-router中的对象
* 路由信息对象 $route
    - $route.params
    - $route.query
* 路由功能对象 $router
    - 根据浏览器历史记录，前进或后退$router.go(1)
    - 通过程序来改变锚点值 $router.push();

#### 多视图(命名视图)
* 避免大家初期敲代码的错误
* 更为灵活的维护，灵活的配置修改显示的效果

* `{ name:'xxx',path:'/xx',component:Home}`
* `{ name:'xxx',path:'/xx',components:{ 坑名:组件,坑名:组件 }   }`
    - 默认  坑名是default `<router-view></router-view>`
    - 有名的坑 `<router-view name="坑名"></router-view>`

* component就是一次填一个坑，代码多了比较不灵活不好维护
* components一次填入多个坑，将组件代码分散，比较好维护
    - 更改结构，可以进行配置性的修改，在main.js文件中


#### 动态追加路由规则addRoutes
* addRoutes([路由对象1,路由对象2])


#### 嵌套路由
* 案例
    - 进入我的主页显示：电影、歌曲

* 应用场景
    - 当应用中需要，变化中存在变化，使用嵌套路由
* 好处
    - 避免重复渲染
* 单页应用框架开发多页应用 -> 嵌套路由实现

#### 重定向及404
* 重定向写在路由规则最上
    - 重定向`{ path:'/',redirect:{ name:'home'}   }`
* 404写在规则最下
    - `{ path:'*', component:NotFound}`


#### 知识点介绍
* 路由meta元数据
* 路由钩子

#### 案例-登录
* url：
    /user/login
    /music/add-music    meta:{ checkLogin:true}
    /music/list-music   meta:{ checkLogin:true}

    需要在锚点值匹配后，决定是否放行，如果需要检查login,来检查，检查好了放行
* 需求:
    - 没有登录不允许访问/music页面



#### 总结
* 路由对象的元数据
    - 这条路由规则需要验证
    - `{ name:'xxx',path:'/xxxx',component:Xxx,meta:{ isLogin:true  }  }`
* 钩子守卫

```javascript
    router.beforeEach( (to,from,next)=>{
        if(to.meta.isLogin){
            //验证登录
                if(isLogined()){
                    next();
                }else{
                    next({
                            name:'login'
                        })
                }
        }
    })
```




#### 编程式导航