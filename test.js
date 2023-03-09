
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