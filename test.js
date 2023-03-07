//Написати функцію для банку, яка приймає три параметри:колбек,колбек,масив.
//Перша  стрілочна функція буде виконуватись,якщо сума чисел в масиві більша або дорінює 0
// та поветрає рядок 'Користувач не боржник, сумма на його балансі <число>!'
//Друга  стрілочна функція буде виконуватись,якщо сума чисел в масиві менша 0
// та поветрає рядок 'Користувач винен банку <число>!'
//
// const resolveFunction = (number) =>  `Користувач не боржник, сума на його балансі ${number}!`;
// ;

// const rejectFunction = (number) =>  `Користувач винен банку ${Math.abs(number)}!`;
// ;

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

//Написати функцію для закупок зброї для ЗСУ
//Функція приймає масив з потрібною зброєю. Створює два масиви
//перший замовлення,яке можна виконати(є потрібна кількість),другий які не можна
//Написати функцію,яка буде приймати ці два масиви та ще два колбек
//Перший колбек оброблює масив та виводить в консоль'You can buy:<Зброя та її кількісь>'
//Другий колбек оброблює масив та виводить в консоль 'You cant buy:<Зброя та її кількісь>'

const staffNato = [
  { name: "bayraktar", price: 300000, quantity: 10 },
  { name: "javelin", price: 8000, quantity: 1140 },
  { name: "leopard", price: 210000, quantity: 400 },
  { name: "f-16", price: 1000000, quantity: 8 },
];

function buyWeapon(neededWeapon, callback) {
  let canSellArray = [];
  let canNotSellArray = [];
  neededWeapon.forEach((weapon) => {
    staffNato.forEach((natoWeapon) => {
      if (weapon.name === natoWeapon.name) {
        if (weapon.quantity < natoWeapon.quantity) {
          canSellArray.push(weapon);
          return;
        }
        canNotSellArray.push(weapon);
      }
    });
  });
  callback(canSellArray, canNotSellArray, resolveWeapon, rejectWeapon);
}

function showResult(canSellArray, canNotSellArray, canBuy, canNotBuy) {
  canBuy(canSellArray);
  canNotBuy(canNotSellArray);
}

const resolveWeapon = (arr) => {
  let markup = `You can buy:`;
  arr.forEach((weapon) => {
    markup += `
	${weapon.name}:${weapon.quantity}`;
  });
  console.log(markup);
};

const rejectWeapon = (arr) => {
  let markup = `You can't buy:`;
  arr.forEach((weapon) => {
    markup += `
	${weapon.name}:${weapon.quantity}`;
  });
  console.log(markup);
};

buyWeapon(
  [
    { name: "bayraktar", quantity: 8 },
    { name: "javelin", quantity: 800 },
    { name: "leopard", quantity: 200 },
    { name: "f-16", quantity: 18 },
  ],
  showResult
);
buyWeapon(
  [
    { name: "bayraktar", quantity: 10000 },
    { name: "javelin", quantity: 800000 },
    { name: "leopard", quantity: 200000 },
    { name: "f-16", quantity: 180 },
  ],
  showResult
);
