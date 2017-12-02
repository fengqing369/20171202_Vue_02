export default {
    template:`
        
        <div>
            用户名:<input type="text" v-model="username">
            密码:<input type="text" v-model="password">
            <button @click="doLogin">登录</button>
        </div>
    `,
    data(){
        return {
            username:'',
            password:'',
        }
    },
    methods:{
        doLogin(){
            var username = this.username;
            var password = this.password;
            if(username == 'abc' && password == '123'){
                //假设登录成功，从后台返回权限
                 //执行了这段代码就标识登录
                 window.localStorage.setItem('permissions',JSON.stringify(['/music/add-music','/music/list-music']));
                 //页面跳转 list页面
                 window.location.hash = '#/music/list-music';
            }
        }
    }
}