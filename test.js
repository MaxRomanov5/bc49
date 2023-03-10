//Повернути масив назв країн у зворотньому алфавітному порядку
// Це ladder (драбина) – об'єкт, який дозволяє підніматись вгору
// та спускатись
// Напишіть методи об'єкта ladder:

// up - піднятись на сходинку вище
// down - опуститись на сходинку нижче
// showStep - показати сходинку
// */

// const ladder = {

//   step:0,
//   up(){this.step += 1
//   },

//   down(){
//     this.step -= 1
//   },
//   showStep(){
//     console.log(this.step)
//   }
// };
// ladder.up()
// ladder.up()
// ladder.down()
// ladder.showStep()

/* 
  Змініть код методів up, down та showStep таким чином, щоб 
  їх виклик можна було зробити по ланцюжку, наприклад так:
  ladder.up().up().down().showStep()
*/
// const ladder = {

//   step:0,
//   up(){this.step += 1;
//     return this
//   },

//   down(){
//     this.step -= 1;
//     return this
//   },
//   showStep(){
//     console.log(this.step)
//   }
// };
// ladder.up().up().down().showStep()

//Написати функцію додавання,віднімання грошей до балансу та підвязати її до аккаунту
//Написати функцію обнулення рахунку

// const account = {
//   balance: 0

// }

// function addMoney(amount) {
//   this.balance += amount;

// }

// addMoney.apply(account, [100]);

// const newAddMoney = addMoney.bind(account)
// newAddMoney(200);
// newAddMoney(500)
// newAddMoney(2500)
// console.log(account);

///Створити обєкт dog,дати йому ім'я
// Створити функцію dogArr на основі функції з обєкту animal
// Створити функцію showLegs,яка буде портати рядок з ім'ям собаки та кількістю ніг з animal
// Cтворити функцію зміни кількості ніг в animal,передати її в dog так,щоб при виклиці з dog вона змінювала кількість ніг в animal

// const animal = {
//   legs: 4,
//   changeLeg(newLegs) {
//     this.legs = newLegs;
//   },
//   sayArrr() {
//     return `${this.name} say arrrr!`;
//   },
// };

// const dog = {
//   name: "Jessie",
//   dogArr: animal.sayArrr,
//   showLegs(name) {
//     return `${name} has ${this.legs} legs`;
//   },
//   changeLeg: animal.changeLeg.bind(animal),
// };

// console.log(dog.dogArr());

// console.log(dog.showLegs.call(animal, dog.name));

// dog.changeLeg(5);
// console.log(animal);
// console.log(dog);

/**
  |============================
  |  module 5 part 2 - day 10.03.2023
  |============================
*/

//Написати клас для банківських аккаунтів. Конструктор приймає ім'я(приватна властивість) та початковий баланс.

//Створити функцію зміни величини коштів в аккаунті та повернення балансу за допомогою гетерів та сетерів

//Додати класу курс доллара

// Написати функцію виведення можливої кількості долларів

//Змінити курс доллара і викликати знову функцію з долларом

//Зробити так щоб зміна курса доллара була відразу у всіх екземплярах класу

// Написати клас для банківських аккаунтів. Конструктор приймає ім'я(приватна властивість) та початковий баланс.

// class BankAccount {
// 	static USD = 5;

// 	#name;

// 	constructor(name, amount) {
// 		this.#name = name;
// 		this._amount = amount;
// 	}

// 	// Створити функцію зміни величини коштів в аккаунті та повернення балансу за допомогою гетерів та сетерів
// 	get amount() {
// 		return this._amount;
// 	}

// 	set amount(value) {
// 		this._amount += value;
// 	}

// 	addMoney(value) {
// 		this.amount += value;
// 	}

// 	// get name() {
// 	// 	return this.#name;
// 	// }

// 	// Додати класу курс доллара

// 	getDollars() {
// 		return this.amount / BankAccount.USD;
// 	}
// }

// const user = new BankAccount('Serhii', 10); // Создаем новый экз со всеми свойствами класса BankAccount

// console.log(user.amount);

// user.amount = -10; // 136 рядок
// console.log(user.amount);

// user.addMoney(500);

// // console.log(user);

// // console.log(user.getDollars());

// const user2 = new BankAccount('Max', 200); // Создаем новый экз со всеми свойствами класса BankAccount

// user2.USD = 10;
// console.log(user2.getDollars());
// console.log(user2);

// BankAccount.USD = 38; // Меняем курс доллара при помощи изменений в классе (глобально)
// console.log(user);
// console.log(user.getDollars());

//  |Second option|
// user._amount += 500;
// console.log(user);

// class Human {
//   hands = 2;
//   constructor(name, weight) {
//     this.name = name;
//     this._weight = weight;
//   }
//   get weight() {
//     return this._weight;
//   }
//   set weight(newWeight) {
//     this._weight = newWeight;
//   }
// }

// class Doctor extends Human {
//   constructor(name, weight, experience) {
//     super(name, weight);
//     this.experience = experience;
//   }
//   makeOperation() {
//     return `Our doctor ${this.name} has ${this.hands} hands`;
//   }
// }

// const surge = new Doctor("Henrique", 73, 24);
// console.log(surge);

// surge.weight = 80;
// console.log(surge);
// console.log(surge.makeOperation());
