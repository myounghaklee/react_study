function funcA(){
    console.log("funcA");
}
let varA = funcA;
varA();

/**
 * 함수표현식
 * 호이스팅이 되지 않음
 */
let varB = function(){
    console.log("funcBBBBB");
};
varB();


/**
 * 화살표 함수
 */

let varC = () =>1;
console.log(varC);

let varD = (value) =>{
    console.log(value);
    return value +1;
};

console.log(varC(10));
