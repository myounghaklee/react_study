let arr1 = [1,2,3];
const newleng = arr1.push(4,5,6,7);


/**
 * pop은 배열의 마지막을 뽑아냄
 */
let arr2 = [1,2,3];
const popItem = arr2.pop();
console.log(popItem); //3
console.log(arr2);//1,2 

/**
 * shift
 * 배열 맨 앞에 있는 요소 제거, 반환
 */
let arr3 = [1,2,3];
const shiftItem = arr3.shift();
console.log(shiftItem); //1
console.log(arr3);//2,3 

/**
 * unshift
 * 배열 맨 앞에 요소 추가
 */
let arr4 = [1,2,3];
arr4.unshift(0);
console.log(arr4);//0,1,2,3 

/**
 * slice
 * 배열의 특정범위를 잘라서 새로운 배열로 반환
 */
 let arr5 = [1,2,3,4,5];
 let sliced = arr5.slice(2,5);
 let sliced3 = arr5.slice(-1); //5 뒤에서부터 한개잘라

 console.log(sliced); //3,4,5
 console.log(arr5); //1,2,3,4,5
 
 /**
  * concat
  */
 let arr6 = [1,2];
 let arr7 = [3,4];
 arr6.concat(arr7); // 1,2,3,4