//Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total)
// const diff = ;
// console.log(diff)

// const result = 108 + 223 - 3 ** 5 * 2;
// console.log(result);

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round().Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.4;

// const valueFloor = Math.floor(value);
// console.log(valueFloor);

// const valueCeil = Math.ceil(value);
// console.log(valueCeil);

// const valueRound = Math.round(value);
// console.log(valueRound);

// const value = 27.5;
// console.log(`floor >> ${Math.floor(value)}`);
// console.log(`ceil >> ${Math.ceil(value)}`);
// console.log(`round >> ${Math.round(value)}`);

// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// // const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// // "Cyberdyne Systems has 200 bots in stock"

// const message =
//   companyName + " has " + (repairBots + defenceBots) + " bots in stock";

// console.log(message);

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання).
//  Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// const parsWeight = Number.parseFloat(weight.replace("," , "."));
// console.log(parsWeight);

// const parsHeight = Number.parseFloat(height.replace("," , "."));
// console.log(parsHeight)

// const bmi = parsWeight  / parsHeight**2;
// console.log(bmi.toFixed(1)); // 28.8
