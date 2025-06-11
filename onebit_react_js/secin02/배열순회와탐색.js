//foreach
//모든 요소 순회하면서 각 요소에 특정 동작을 수행시킴
let arr1= [1,2,3];
arr1.forEach(function(item, idx, arr){
    console.log(idx, item*2);
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item*2);
});
console.log(doubledArr);

// includes
// 배열에 특정 요소 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);
console.log(isInclude);

/**
 * indexof
 * 인덱스(위치)를 찾아 반환
 */
let arr3=[1,2,3];
console.log(arr3.indexOf(2)); //1