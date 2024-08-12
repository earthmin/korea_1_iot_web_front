//& 활용 문제 1번 답안 
class User {
  // user 클래스 생성 
constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

printInfo() {
    // printInfo 생성 
    console.log(`이름: ${this.name}`);
    console.log(`나이: ${this.age}`);
    console.log(`이메일: ${this.email}`);
}
}

const user1 = new User("마루", 4, "maru@naver.com");
user1.printInfo();
// 마루야 주문 받자 

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printProduct() {
        console.log(`상품명: ${this.name}`);
        console.log(`가격: ${this.price}원`);
    }
}

const product1= new Product("사료", 80000);
product1.printProduct();

class Order {
    // order 클래스 생성 

constructor(user, product, quantity) {
    this.user = user;
    this.product = product;
    this.quantity = quantity;
}

  // 총 주문 금액을 계산하고 출력하는 메서드
printOrderSummary() {
      const totalAmount = this.product.price * this.quantity;
    console.log(`주문자: ${this.user.name}`);
    console.log(`상품명: ${this.product.name}`);
    console.log(`수량: ${this.quantity}`);
    console.log(`총 주문 금액: ${totalAmount}원`);
}
}

const order = new Order(user1, product1, 2);

// 주문 요약 출력 마루야 돈 계산해라 
order.printOrderSummary();



