//Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 3 ** 5;
// console.log(result);

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// console.log(`floor >> ${Math.floor(value)}`);
// console.log(`ceil >> ${Math.ceil(value)}`);
// console.log(`round >> ${Math.round(value)}`);

// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// const anotherMsg =
//   companyName + " has " + (repairBots + defenceBots) + " bots in stock";
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// console.log(anotherMsg);

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;
// First variant
// let weight = "88,3";
// let height = "1.75";

// const bmi = weight.replace(",", ".") / Math.pow(height.replace(",", "."), 2);
// console.log(bmi.toFixed(1)); // 28.8
// Second variant
let weight = "88,3";
let height = "1.75";
weight = Number.parseFloat(weight.replace(",", "."));
console.log(`weight >> ${weight}`);
height = Number.parseFloat(height.replace(",", "."));
console.log(`height >> ${height}`);
const bmi = weight / Math.pow(height, 2);
console.log(`Your BMI is ${bmi.toFixed(1)}`); // 28.8
