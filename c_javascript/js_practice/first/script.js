// let userName = prompt('이름을 입력하시오: ');
// let age = Number (prompt('나이를 입력하시오'));

//input 창과 동일하게 prompt의 값의 문자열로 인식
// 숫자에 대한 자료활용을 위해 형변환이 필요
// console.log('이름의 타입: ' + typeof userName);
// console.log('나이의 타입: ' + typeof age);

//데이터 타입: typeof 연산자를 통한 값은 소문자로 시작
// 형 변환: 대문자로 시작하는 타입()
// const NUM1 = Number(prompt('첫번째 숫자를 입력해주세요'));
// const NUM2 = Number(prompt('두번째 숫자를 입력해주세요')); 

// console.log(`두 수의 합은 ${NUM_1 + NUM2}`);

//# 연산자 예제
// prompt 창으로 입력받는 값의 타입은 string(문자열)

//! 문제1
const PI = 3.14;
let radius //원의 반지름
let area = PI * radius * radius;; //원의 넓이 

// : 원의 넓잇값을 계산하여 출력 
console.log(`원의 넓이: ${area}`);



//! 문제2
// 1 inch = 2.54 cm
// : 단위 변환기 프로그램

let inch = 10;

// : inch값을 변수에 대입하면 cm값으로 번환하여 해당 값을 출력 


let number
number = Number(prompt('숫자를 입력하세요'));
let message = number % 2 === 0 ? 짝수 : 홀수;
console.log(message);

let total = 0;
total += 5;
total *= 3;
total -= 2;

console.log('최종결과: ' , total);

//% === 조건문 예제 === //

//! 윤년 계산기 

let randomYear = 2024;

let isTrue = (randomYear % 4 === 0 && randomYear % 100 !== 0) ||
(yaer % 400 === 0);

if (isLeepYear) {
  console.log(`${randomYear}년은 윤년입니다.`);
} else {
  console.log(`${randomYear}년은 윤년이 아닙니다.`);
}






