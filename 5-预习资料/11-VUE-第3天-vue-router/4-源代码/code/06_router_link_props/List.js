export default {
    template:`
        <div>
            查询字符串：
            <ul>
                <li v-for="hero in heros"  :key="hero.id"   >
                    {{hero.name}}  
                    <router-link :to="{name:'detail',query:{id:hero.id}  }">查看详情</router-link>
                </li>
            </ul>   
            
            path的方式：
            <ul>
                <li v-for="hero in heros"  :key="hero.id"   >
                    {{hero.name}}  
                    <router-link :to="{name:'detail2',params:{id2:hero.id}  }">查看详情</router-link>
                </li>
            </ul>   

        </div>
    `,
    data(){
        return {
            heros:[{id:1,name:'貂蝉' },{id:2,name:'班长' },{id:3,name:'王昭君' },{id:4,name:'杨玉环' }]
        }
    }
}