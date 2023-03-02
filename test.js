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

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 2;

// if (minutes === 0) {
//   console.log(`${hours} г.`);
// } else {
//   console.log(`${hours} г. ${minutes} хв.`);
// }



// // Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, 
// якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue.
//  Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).


// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError
// (null || undefined) ?? "foo"; // returns "foo"

// const incomingValue = undefined;
// const defaultValue = "10";
// const value = incomingValue ?? defaultValue 
// console.log(value);

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". 
// Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// let answear = prompt('Яка офіційна назва JavaScript?');
// console.log(answear)

// if( answear === "ECMAScript" ){
//     alert("Правильно!")
// }
// else{
//     alert("Не знаєте? ECMAScript!")
// }


//  Напиши скрипт котрий порахує суму чисел від 1 до 10,проаускаючи парні числа та виведе у консоль результат

// let min = 1;
// let max = 10;
// let total = 0;

// for (let i = 0; i <= max; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         total += i;
//     }
// }

// console.log(total);

// Напиши скрипт який буде просити нас ввести число більше за 100, доки
//   ми таке не введемо
    
//   Скористайся циклом while

// let input = 0;

// while (input <= 100) {
//     input = Number(prompt("Введіть число більше за 100."));
// }

//Написати функцію, яка буде перевіряти чи є в масиві число 4 і повертати новий масив з цими четвірками.
//Якщо  в масиві є число 10, то функція повертає рядок 'В цьому масиві є число 10'.

// function filterArray (arr){
//     let array = []

//     if(arr.includes(10)) {
//         return 'В цьому масиві є число 10'
//     } 

//     for (let number of arr) {
//         if (number === 4) {
//             array.push(number)
//         }
//     }
//     return array

// }

// console.log(filterArray([2,34,55,67,4,14,10,4,45.98,4]));
// console.log(filterArray([4,6,8,2,9,4,4,78,12,11,6,4,4]));

// function filterArray(arr) {
//     const resultArray = [];
//     for (let i = 0; i < arr.length; i += 1) {
//       if (arr[i] === 4) {
//         resultArray.push(arr[i]);
//       }
//       if (arr.includes(10)) {
//         return `В цьому масиві (${arr}) є число 10`;
//       }
//     }
//     return resultArray;
//   }