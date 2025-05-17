// NumberType
let num1 = 1;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; //양 의 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN;

// String
let myName = "enzo";
let myAge = "34";

console.log(myName + myAge);

let introduceText = `${myName}은 ${myAge}살 입니다.`;

// boolean
let isTrue = true;
let isEmpty = false;

// Null Type 
let empty = null;

// Undefined
let none; // 초기화 없을시 undefined

// 묵시적 형변환 : js가 알아서 형변환
// 연산중 한개의 변수만 형변환 했을때 오류가 없으면 js엔진이 자동으로 형변환 시킴
let num = 10;
let str = "20";
const result = num + str;
console.log(result); //1020

// 명시적 형변환
// 내장함수 등을 이용해서 직접 형변환 명시
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

