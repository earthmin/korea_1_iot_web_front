let student = {
  name: "홍길동",
  age: 20,
  major: "컴퓨터 공학과",
  lectures: ["자료구조", "알고리즘", "운영체제"]
};

// console.log(JSON.stringify(student));
// console.log(JSON.stringify(student, null,1));

// let jsonData = JSON.stringify(student);
// console.log(jsonData);

// console.log(JSON.parse(jsonData));

let student_json = JSON.stringify(student);
console.log(student_json);


