//& 활용 문제2번 답안지 

class ShoppingCart {
  constructor() {
    this.Items = [];
  }

  addItem(item) {
    this.Items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.Items.length; i++) { 
      total += this.Items[i].price;
    }
    return total;
  }

  printReceipt() {
    if (this.Items.length === 0) {
      console.log("Your cart is empty.");
    } else {
      console.log("Receipt:");
      this.Items.forEach(function(item) {
        console.log(`${item.name}: $${item.price}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1.5 });
cart.addItem({ name: "Banana", price: 2.0 });
cart.printReceipt();


//# 수정한 부분 

// calculateTotal() {
//   let total = 0;
//   for (let i = 0; i <= this.Items.length; i++) {
//   total += this.Items[i].price;
//   }
//   return total;
//   }
//!  >> 잘못된 표현 (<=) 
  
//     calculateTotal() {
//       let total = 0;
// ?      for (let i = 0; i < this.Items.length; i++) { 
//         total += this.Items[i].price;
//       }
//       return total;
//     } 
//!   >> 수정한 오류 (<)
  
//   printReceipt() {
//   if (this.Items.length = 0) {
//   console.log("Your cart is empty.");
//   } else {
//   console.log("Receipt:");
//   this.Items.forEach(function(item) {
//   console.log(`${item.name}: $${item.price}`);
//   });
//   console.log(`Total: $${this.calculateTotal()}`);
//   }
//   }
//   }
//!   >> 잘못된 표현 (=)
  
//    printReceipt() {
// ?      if (this.Items.length === 0) {
//         console.log("Your cart is empty.");
//       } else {
//         console.log("Receipt:");
//         this.Items.forEach(function(item) {
//           console.log(`${item.name}: $${item.price}`);
//         });
//         console.log(`Total: $${this.calculateTotal()}`);
//       }
//     }
//   }
  
//!   >> 수정한 오류 (===)

//? 주석이 수정한 답안입니다 
  

