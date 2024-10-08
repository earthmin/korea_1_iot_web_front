//! d_operator

// 연산자: 수학적 계산을 위한 코드
// >> 산술, 할당, 비교, 논리

//# 1. 산술 연산자
// +, -, *, / (사칙연산)
// ++(증가), --(감소), %(나눗셈-나머지)

let x = 10;
let y = 3;

console.log('=== 산술연산자clf ==='); // 콘솔창에서의 구분 
console.log(x + y); //13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333
console.log(x % y); // 1 (나머지: a % b -a를 b로 나누고 난 나머지)
console.log(10 % 2); //0

// +) 증감연산자
// : ++, -- 의 형태로 수를 1씩 증가 또는 감소시킬때 사용하는 연산자
// : 1항(하나의 데이터)에 대한 연산식

x = 10; // 변수 재할당
console.log(x++); //10
console.log(x); // 11

// 증감 연산자의 경우 전위, 후위로 나뉨
// : 데이터의 앞에 연산자가 있을 경우 전위 (바로 값을 변화!)
// : 데이터의 뒤에 연산자가 있을 경우 후위 (해당 식에서 값을 바로 변화X, 그 다음 호출시 값이 반영)

x  = 10;
console.log(x++);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);

x = 10;
console.log(--x);
console.log(x);
console.log(--x);
console.log(--x);
console.log(x);
console.log(--x);

x = 10;
x++;
x++;
--x;
x++;
x;
x++;
++x;
--x;
console.log(x);

x = 14;
y = x -- + 5 + --x;
// 14(-1) + 5 + 13 

//# 2. 할당(대입) 연산자 : 연산 방향이 '오른쪽에서 왼쪽' 
// =(할당), +=, -=, *=, /=, %=

let a = 10; // 10을 a에 할당 

//더하기 후 할당 
a += 5; // a에 5를 더하고 다시 a에 할당햇다 a = a + 5
//빼기 후 할당
a -= 2; // a = a-2
//곱하기 후 할당
a *= 2;
//나누기 후 할당 
a /= 2;

//# 3. 비교 연산자
// : 피연산자 사이(데이터들)의 상대적인 크기를 판단하여
// , 결과를 참(true), 거짓(flase) 로 반환 >> boolean

// 부등호: <, >, >=, <=
//동등, 부등: ==, !=
//일치, 불일치: ===, !==

let num1 = 10;
let num2 = '10';

//값의 동일성을 판단 (데이터 유형 고려하지 않는다)
// : 동등/부등
console.log(num1 == num2);
console.log(num1 != num2);

//어격하게 값과 데이터 유형의 완전한 동일성을 판단
// : 일치/불일치
console.log(num1 === num2);
console.log(num1 !== num2);

//+) 문자열의 비교 연산자
let str1 = 'abc';
let str2 = 'bcd';

console.log(str1 < str2); // a ~ z 까지 뒤로 갈수록 큰값
console.log(str1 === str2); 
console.log(str1 > str2);

num1 = 10;
num2 = '10';

console.log('부등호 사용비교');
console.log('num1 > num2'); //f
console.log('num1 >= num2'); //t
console.log('num1 < num2'); //f
console.log('num1 <= num2'); //t