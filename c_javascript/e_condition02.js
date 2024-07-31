//! e_condition02.js

//# 4. switch문 
// : 하나의 표현식의 값을 확인하고 해당 값과 일치하는 
// case문의 코드 블록을 실행

//* switch case문의 구조 (기본 형태)
/*
switch (식) {
  case 값1: 
    식의 값1과 일치할 경우
  case 값2: 
    식의 값2과 일치할 경우
  case 값3: 
    식의 값3과 일치할 경우
  case 값4: 
    식의 값4과 일치할 경우

  ...
  default :
  식이 어떤 값과도 일치하지 않을 경우 실행
} */

let fruit = 'banana';

//case의 데이터 유형은 switch 식의 데이터 유형과 동일
switch (fruit) {
  case 'apple':
    console.log('사과');
    // 동일한 case값을 찾을 경우: 그 다음 이어지는 코드를 모두 실행
    // >> 코드 실행 흐름을 중지하려면 break키워드를 사용하여 switch문을 탈출 
  case 'banana' :
    console.log('바나나');
  case 'ornage' :
    console.log('오렌지');
    break;
    default : // 일치하는 case 값이 없는 경우
    console.log('일치하는 과일이 없습니다. ');
}

//! 조건문 종합 예제
let score = 100;
let grade;
// 점수를 변수에 담아 해당 점수가 
// 0 미만 100 초과일 경우 '유효한 점수가 아닙니다'

// 90점 이상 A
// 80점 이상 B
// 70점 이상 c
// 60점 이상 d
// 그외의 경우 f

// if (score < 0 || score > 100) {
//   console.log('유효한 점수가 아닙니다');
// } else if (score < 90) {
//   console.log('a 학점입니다');
// }

switch (true) {
  case ( score < 0 || score > 100):
    grade = '유효한 점수가 아닙니다. ';
    break;
  case (score >= 90) :
  grade = 'a';
  break;
  case (score >= 80) :
  grade = 'ab';
  break;
  case (score >= 70) :
  grade = 'c';
  break;
  case (score >= 60) :
  grade = 'd';
  break;
  default :
  grade = 'f';
  
}
console.log(grade);

//* 조건문 Best Practice //

// 1. 비교 연산자 사용지 '==' 대신 '===' 사용권장

console.log(0 == false); 
console.log(0 === false);

// 2. 논리 자료형 변수에 대한 조건 활용시 일치/불일치 여부를 생략 
let isTrue = true;

if (isTrue !== true) {console.log('isTrue는 참이다.');}
