/**
 * 원시타입 :Number, String, Boolean
 * 값 자체로써 변수에 저장되고 복사된다.
 * 불변값이다(메모리값 수정x)
 */


/**
 * 객체타입 : Object, Array, Function 
 * 참조값을 통해 변수에 저장되고 복사된다.
 * 가변값이다 (메모리 값 수정)
 */

/**
 * 얕은복사
 * o2값 변경시 원본객체 수정될 수 있어 위험
 * 아래코드는 o1.name도 이명학으로 수정됨 
 */
let o1 = {name: "이정환"};
let o2 = o1;
o2.name = "이명학"

/**
 * 깊은복사
 * 새로운 객체를 생성하며서 프로퍼티만 따로 복사함
 * 원본 객체 수정될 일 없어 안전
 * o4.name만 이명학으로 수정됨
 */

let o3 = {name: "이정환"};
let o4 = {...o3};
o4.name = "이명학"
 
/**
 * 객체간 비교는 기본적으로 참조값 기준으로 이루어짐
 */
let o5 = {name: "이정환"};
let o6 = o5;
let o7 = {...o5};
console.log(o5===o6); //true
console.log(o5===o7); //false

console.log(JSON.stringify(o5) === JSON.stringify(o7)) // true