// `mathOperations.js`라는 파일을 생성하여, 아래 기능을 제공하는 함수를 정의하세요.

// Named Export: 두 수의 합을 반환하는 함수
export function add(a, b) {
  return a + b;
}

// Named Export: 두 수의 차를 반환하는 함수
export function subtract(a, b) {
  return a - b;
}

// Default Export: 두 수의 곱을 반환하는 함수
export default function multiply(a, b) {
  return a * b;
}


// `main.js`라는 파일을 생성하여, `mathOperations.js`에서 제공한 함수들을 불러와 사용하세요.


// mathOperations.js에서 필요한 함수들을 불러오기
import multiply from './mathOperations.js'; // Default export는 임의의 이름으로 불러올 수 있음
import { add, subtract } from './mathOperations.js'; // Named export는 이름 그대로 불러옴

// 두 수를 입력받아 세 가지 연산을 수행하는 코드
const num1 = 30;
const num2 = 10;

console.log("Add:", add(num1, num2)); 
// 덧셈 
console.log("Subtract:", subtract(num1, num2)); 
// 뺄셈 
console.log("Multiply:", multiply(num1, num2)); 
// 곱셈 