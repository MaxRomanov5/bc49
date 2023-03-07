//Написати функцію для банку, яка приймає три параметри:колбек,колбек,масив.
//Перша  стрілочна функція буде виконуватись,якщо сума чисел в масиві більша або дорінює 0
// та поветрає рядок 'Користувач не боржник, сумма на його балансі <число>!'
//Друга  стрілочна функція буде виконуватись,якщо сума чисел в масиві менша 0
// та поветрає рядок 'Користувач винен банку <число>!'
//
// const resolveFunction = (number) => {
//   return `Користувач не боржник, сума на його балансі ${number}!`;
// };

// const rejectFunction = (number) => {
//   return `Користувач винен банку ${Math.abs(number)}!`;
// };

// function bankAdmin(resolve, reject, arr) {
//   let total = 0;
//   arr.forEach((number) => {
//     total += number;
//   });

//   if (total >= 0) {
//     return resolve(total);
//   }

//   return reject(total);
// }

// console.log(bankAdmin(resolveFunction, rejectFunction, [100, 500, -700]));
// console.log(bankAdmin(resolveFunction, rejectFunction, [100, 500, -300, 600]));


