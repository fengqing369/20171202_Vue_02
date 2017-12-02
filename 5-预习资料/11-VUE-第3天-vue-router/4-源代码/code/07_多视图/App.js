export default {
    template:`
        <div>
            我是app
        <router-view></router-view>
        <router-view name="header"></router-view>
        <router-view name="body"></router-view>
        <router-view name="footer"></router-view>



        </div>
    `
}