export default {
    template:`   
        <div style="background-color:red;height:200px;">
            我是App
            <router-link to="/mymusic">音乐</router-link>
            <router-link to="/mymusic">音乐</router-link>
            <router-link to="/mymusic">音乐</router-link>
            <router-link to="/movie">电影</router-link>
            <router-link to="/movie">电影</router-link>
            <router-link to="/movie">电影</router-link>
            以下是坑:↓
            <router-view></router-view>
        </div>
    `,created(){
        // console.log(this.prototype ===window.vm);
        // console.log(this.$route);
    }
}