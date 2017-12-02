//默认导出（名字都随意）
var xxx = {
    add(n1,n2){
        return n1 + n2;
    }
}

export default xxx;



//声明式导出
export var num = 1;  //对应 import {num} from './xxx.js'
export var num2 = 2; //对应 import {num2} from './xxx.js'

var num3 = 3;

num3 = 5;


export {num3};  //导出已经声明的变量
