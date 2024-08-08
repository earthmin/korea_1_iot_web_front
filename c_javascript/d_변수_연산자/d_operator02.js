//! d_operator02.js

//# 4. 논리 연산자 
// : boolean 값을 연산하는데 사용
// : 참(true) 거짓(flase)을 반환

// - && 연산자(and), || 연산자(or)
// - ! 연산자

// 1) && 연산자(논리곱)
// : flase가 하나라도! 존재하면 무조건! false

// true && true : true
// true && true && flase && true: flase

// +) '단락평가': flase 뒤의 내용은 평가되지 x

//? || 연산자(논리합)
// :true가 하나라도! 존재하면 무조건 true

// true || true > true
// flase || true > true
// flase || false || false > false

// +) || 연산자의 '단락평가' : true 뒤의 내용은 평가되지 x

//? ! 연산자 (부정 논리, not)
// : boolean 자료형의 데이터는 전환

let bool1 = true;
let bool2 = flase;

console.log(bool1 && bool2); //f
console.log(bool1 || bool2); // t

console.log(!bool1); // f
console.log(!bool2); // t

//# 5. 삼항(조건) 연산자 - 제일중요합니데이
// : 유일하게 피연산자를 세 개를 가지는 조건 연산자(기호가 2개)

//? 기본 구조
// 표현식 ? 반환값1 : 반환값2

// - 표현식은 true 또는 false 값을 반환하는 식 
// - 반환값1 : 위의 표현식 조건이 참(true)일 때 반환될 값
// - 반환값2 : 위의 표현식 조건이 거짓(flase) 일 때 반환될 값

let age = 21;
let beverage = age > 20 ? 'Beer' : 'Juice' ;
console.log(beverage); //Beer

let isMember = true;
let discount = flase ? '10%' : '5%';
console.log(discount); //5%

//삼항연산자의 중첩 
// ex) 20살 이상(성인) - 20살 미만(미성년자)
// 미성년자 - 13살 이하 (어린이) / 13살 초과 (청소년)

age = 22;
let identity = age >= 20 ? '성인' : (age <=13 ? '어린이' : '청소년');
console.log(identity);

//# 문자열 연산자
// 타입이 모두 숫자: 산술 연산의 덧셈
// 타입이 하나라도 문자열 일 경우: 문자열의 결합 

let firstName = 'ji';
let lastName= 'somin';

console.log(firstName + lastName); 

//# typeof 연산자
// : 데이터에 대한 타입 반환이 문자열로 반환
// 'number', 'string', 'boolean', 'undifiend', 'object', 'funtion', 'symbol', 'bigint'

// +) null 타입의 결함: 초기 jt 설계의 결함으로 object 타입을 반환 

let objectData = {};
let funtionData = function() {}

console.log(typeof objectData); //obj
console.log(typeof funtionData); //fun