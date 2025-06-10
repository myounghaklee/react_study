let arr = [1,2,3];
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

// for of 반복문
for(let item of arr){
    console.log(item);
}

/**
 * 객체 순회
 */

let person = {
    name : "이명학",
    age : 27,
    hobby : "테니스"
};

let keys = Object.keys(person);
for ( let key of keys){
    console.log(key);
}

for ( let key of keys){
    console.log(key, person(key)); //key ,value 모두 출력
}

// object values
let values = Object.values(person);
for(let value of values){
    console.log(value);
}

// for in
for(let key in person){
    const value = person(key);
    console.log(key, value);
}