/**
 * Hoisting
 * 
 * 해당 스크립트 파일 실행전 변수이름 모두 확인해놓은 상태
 * (모두 선언만 해놓은 상태로 생각하기)
 */

console.log(name);
var name = 'gayeon';

/**
 * Hoisting은 뭘까?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

console.log(name);
let name = "gayeon";
console.log(name);