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
