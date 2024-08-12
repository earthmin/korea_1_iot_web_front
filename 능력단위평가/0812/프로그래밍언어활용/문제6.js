//& 활용문제 6번 답안 

// 1. 숫자형 값들을 담는 배열 numbers를 선언하고 초기화합니다.
const numbers = [1, 2, 3, 4, 5];

// 2. 배열의 모든 요소의 합을 저장하는 sum 변수를 선언합니다.
let sum = 0;

// 3. calculateSum() 함수를 작성하여 배열 numbers의 모든 요소의 합을 계산하고 sum 변수에 저장합니다.
function calculateSum() {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
}
// 4. 함수를 호출하여 sum 변수의 값을 alert를 통해 출력합니다.
calculateSum();
alert("배열 요소의 합은: " + sum);
