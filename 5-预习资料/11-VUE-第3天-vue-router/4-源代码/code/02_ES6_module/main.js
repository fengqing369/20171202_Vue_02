// 导入另一个js文件 ，cal.js
// 
// 

//默认导入(名字都随意)
// import Cal from './cal.js';  //对应默认导出 export default {}

// console.log(Cal);




//声明式导入(名字必须一致)
// import {num,num2} from './cal.js';  //导入对应这两个变量

// console.log(num);
// console.log(num2);


//声明式导入2(名字必须一致)
// import {num,num2,num3} from './cal.js';  //导入对应这两个变量

// console.log(num);
// console.log(num2);
// console.log(num3);


//全体导入 
// if(true){  //这样不行
//    import * as obj from './cal.js';
//     console.log(obj); 
// }
import * as obj from './cal.js';
console.log(obj);