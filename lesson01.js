
'use strict';

// {
//     var a = 12;
//     let b = 15;
//     {
//         console.log(a,b);
//     }
// }
// console.log(a);
// //console.log(b); exception : b is not defined
//
// //
// for(let i=0;i<5;i++) {
//
// }
// //console.log(i); //exception : i is not defined
//
// //提升
//
//
// //exception:c is not defined
// // (function f() {
// //     console.log(c);
// // })();
//
// //
// (function f() {
//
//     console.log(c);
//     var c =12;
// })();
//
// (function f() {
//
//     var c =12;
//     console.log(c);
//
// })();
//
// //let 定义不会提升 exception:c is not defined
// // (function f() {
// //
// //     console.log(c);
// //     let c =12;
// //
// // })();
//
// //let a 覆盖了var外层var的定义；所以以下代码会报not defined
// // var a = 111;
// // (function f() {
// //     console.log(a);
// //     let a;
// //
// // })();
//
// //代替立即执行匿名函数
// var config = (function () {
//     var config = [];
//     config.push(1);
//     config.push(1);
//     config.push(1);
//     return config;
//
// })();
// console.log(config[0]);
//
// let config_1;
// {
//     config_1 = [];
//     config_1.push(2);
//     config_1.push(1);
//     config_1.push(1);
//
// }
// console.log(config_1[0]);

//函数不会被提升
// function a() {
//     console.log("This is outer a");
// }
// function f() {
//
//     if(false){
//         function a() { console.log("This is innner a") }
//     }
//     a();
// }
// f();

//实际的例子

var arr = [];
function f() {
    for(var i=0;i<5;i++){
        arr.push(function () {
            console.log(i);
        });
    }
}
f();
arr[2]();

var canFly = function() {
    return true;
};

function printprops(o) {
    console.log("hahah");
    for(let p in o) {
        console.log(p + ": "+o[p] +"\n");


    }
}

console.log(canFly());

printprops(Function);
