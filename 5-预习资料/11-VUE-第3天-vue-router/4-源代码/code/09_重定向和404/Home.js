export default {
    template:`
        <div style="background-color:hotpink;">
            <router-link :to=" { name:'home.music'} ">我的音乐</router-link>
            <router-link :to=" { name:'home.movie'} ">我的电影</router-link>

             欢迎您

            
            娱乐区域↓
                <router-view></router-view>


        </div>

    `
}