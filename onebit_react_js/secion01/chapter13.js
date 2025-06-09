/**
 * 콜백함수 : 다른함수에 인수로써 전달된 함수
 */

function main(value){
    value();
}
function sub(){
    console.log("im subbbb");
}
main(sub);