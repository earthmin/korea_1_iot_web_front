// a_basic.ts

// let num = 10;
// : helloWorld.ts 파일의 변수와 충돌

// : ts는 파일 단위의 스코프가 생성되지 X
// >> 프로젝트 전체 범위의 스코프가 전역 스코프

//! 스코프 생성 방법
// 1. 중괄호 사용법
// : 직관적인 스코프를 생성
{
  let num = 10;
}

{
  let num = 5;
}

// 2. export 키워드를 사용법
// : export 키워드를 사용하는 경우 ts 파일이 자동 모듈로 인식
// >> 외부의 전역 스코프와 충돌을 방지 가능

// tmp: temporary(일시적인, 임시의)
export const tmp = "";

let num = 10;
console.log(num);
let str = "123";

//! js와의 차이점
let message = "hello";

console.log(message.toUpperCase()); // HELLO

// message(); - Error

//! 코드 포맷터 (Prettier)
// ctrl + a : 전체 코드 선택
// ctrl + k + f : 포맷터 진행