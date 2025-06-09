// Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f4){
    console.log( "falsy")
}

// Truthy 한 값 
// 위의  7가지를 제외한 모든값이 truthy한 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () =>{};
