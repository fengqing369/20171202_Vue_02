
//this-> window
// 向外导出组件
export default {
    data(){
        return {

        }
    },
    template:``,
    methods:{
        xxx:()=>{ //箭头函数本身没有this，向上级function绑定this
            this.xxx;  //按照function来用，vue处理了，就是组件对象
        },
        show(){
            // this.xxx;  //按照function来用，vue处理了，就是组件对象
            
            var self = this;
            Vusbus.$on('xxx',function(){
                //在这里要操作组件
                self.xxx = 'xxx';  //操作组件
            });

            //使用箭头函数
            Vusbus.$on('xxx',()=>{
                // 这里的this就是show函数内的this,就是组件对象
            })


        }
    },
    computed:{
      
    },
    components:{

    },
    props:['xxx'],
    filters:{

    },

    watch:{

    }
}