export default {
    template:`   
        <div style="background-color:red;height:200px;">
            我是App
            以下是坑:↓
            <router-view></router-view>
        </div>
    `,created(){
        console.log(this.prototype ===window.vm);
        console.log(this.$route);
    }
}