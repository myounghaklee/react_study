/**
 * spread 연산자
 * 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
 */

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [5,...arr1,6,7]; //spread 연산

let obj1 = {
    a:1,
    b:2
};

let obj2 = {
    ...obj1,
    c:3,
    d:4
};

/**
 * rest 매개변수
 * 나머지 매개변수라고도 한다.
 */

function funcB(...rest){

}//rest = 1,2,3

function funcB1(one,...rest){

}//one = 1, rest = 2,3
funcB(...arr1);



