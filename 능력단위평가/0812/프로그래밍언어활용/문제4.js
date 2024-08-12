let num1 = Number(prompt('숫자 1 입력하세요'));
let num2 = Number(prompt('숫자 2 입력하세요'));
let num3 = Number(prompt('숫자 3 입력하세요'));


if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log('숫자 아님');

} else{
  let sum = num1 + num2 + num3;
  let avg = sum / 3;
  let max = Math.max(num1, num2, num3);
  
  console.log(`세 숫자의 합 : ${sum}`);
  console.log(`세 숫자의 평균 : ${avg}`);
  console.log(`세 숫자 중 가장 큰 값 : ${max}`);
}

