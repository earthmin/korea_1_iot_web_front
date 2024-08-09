// https://jsonplaceholder.typicode.com
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/원하고자 하는 데이터 배열명 
// https://jsonplaceholder.typicode.com/users/원하고자 하는 데이터 배열명/id

//! async / await 를 사용하여 JSONPlaceholder에서 데이터를 가져오는 함수 
async function fetchPosts(postId) {
  // try {

  // } catch() {

  // } - try, catch 블록 구조 

  try {
    // 함수 내의 로직
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error: status: ${response.status}`);
    }
    const posts = await response.json();
    console.log(posts);
    
  } catch(e) {
    console.log(`게시물 가져오기 실패: ${e.message}`);

  }
}

fetchPosts(2);