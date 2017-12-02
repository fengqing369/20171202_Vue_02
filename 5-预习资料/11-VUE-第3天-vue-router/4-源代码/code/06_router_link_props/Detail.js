export default {
    template:`
            <div>
                我是详情页面
                {{$route.query.id}}
            </div>

    `,created(){
        // console.log(this.$route.query);
        // console.log(this.$route.query.id);

        // console.log(this.$route.params);
        // console.log(this.$route.params.id2);
    }
}