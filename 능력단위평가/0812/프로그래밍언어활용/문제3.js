//& 활용 문제 3번 답안 
let car = {
  cars: [], 
}

let exampleCar = {
  id: 1, 
  emphysema: 'BMW520i',
  master: '지마루',
  isAvailable: true 

  
}

//# 프로젝트 구현
class Cars {
  constructor(id, emphysema, master) {
    this.id = id;
    this.emphysema = emphysema;
    this.master = master;
    this.isAvailable = true;
  }

  
  rent() { // 차량 대여
    if (this.isAvailable) { 
      this.isAvailable = false;
      console.log(`${this.emphysema} has been rented`);
    } else {
      console.log(`${this.emphysema} is currently not available`);
    }
  }

  returnCar() { 
    this.isAvailable = true; 
    console.log(`${this.emphysema} has been returned`);
  }
}


class parkinglot {
  constructor() {
    this.cars = []; 
  }

  addBook(emphysema, master) {
    
    const newCar = new Book(this.cars.length + 1, emphysema, master);
    this.cars.push(newCar);
    console.log(`${emphysema}차량을 렌트합니다(주인: ${master})`);
  }

  
  displayCars() {
    console.log('=== parkinglot ===');
    this.cars.forEach(car => {
      console.log(
        `${car.id}: ${car.emphysema} by ${car.master}
          - ${car.isAvailable ? '렌트 가능' : '렌트됨'}`
      );
    });
  }


  rentCar(id) {
    
    const car = this.cars.find(car => car.id === id);

    if (car) {
      car.rent(); 
    } else {
      console.log('차량이 없습니다.');
    }
  }


  returnCar(id) {
    const car = this.cars.find(car => car.id === id);
    
    if (car) {
      book.returnCar();
    } else {
      console.log('차량이 없습니다.');
    }
  }
}

