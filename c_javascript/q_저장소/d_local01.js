// d_local01.js

//! 로컬 스토리지(local Storage)
// : 웹 브라우저가 제공하는 저장 공간 
// >> 사용자의 컴퓨터에 영구적으로 데이터를 저장 가능 

// HTML 5 웹 스토리지 사양의 일부 도입으로 
// , 쿠키의 한계를 보완한 큰 저장 용량과 보안을 제공 

//? 1. 로컬 스토리지 데이터 저장 
// : localStorage.setItem(key, vlaue)
// >> 웹 브라우저의 저장 공간에 데이터 저장 (브라우저를 닫아도 데이터가 유지)

localStorage.setItem('key', 'value');
localStorage.setItem('username, 이승아');
// cf) username, userName

//# 로컬 스토리지의 데이터 저장 
// : 기본적으로 문자열 데이터만 저장 
// >> 기본 자료형의 경우 저장 가능 (문자열로 인식)
localStorage.setItem('userAge', 50);
localStorage.setItem('isStudent', false);
// cf) 로컬 스토리지에서 객체나 배열과 같은 참조 자료형 데이터를 저장하려면 문자열 형태로 변환 
// : JSON.strigify() 메서드를 사용 

let userInfo = {
  name: '이도경',
  age: 50
}

localStorage.setItem('userInfo', JSON.stringify(userInfo));

//?  로컬 스토리지 데이터 읽어오기 (불러오기)
// localStorage.getItem(key)
// >> 해당 keyㅜ가 존재하지 않으면 null을 반환 

// 1) 기본자료형

let keyValue = localStorage.getItem('key');
let usernameValue = localStorage.getItem('username');
let userAgevalue = localStorage.getItem('userAge');

if (keyValue || usernameValue || userAgevalue) {
  console.log(keyValue);
  console.log(usernameValue);
  console.log(userAgevalue);
}

// 2) 참조 자료형 (객체, 배열)
let storesData = localStorage.getItem('userInfo');
let userInfoValue = JSON.parse(storesData);
console.log(userInfoValue);
console.log(userInfoValue);

//# 로컬 스토리지에서 데이터를 가져오는 경우 
// : null을 반환하는 상황을 대비하여 데이터 사용 전 null값 처리를 확인 

//? 로컬 스토리지 데이터 삭제 
// :localStorage.removeItem(key);
// :localStorage.clear();

localStorage.removeItem('userAge');
localStorage.removeItem('isStudent');

localStorage.clear();