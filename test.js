// Створіть масив genres з елементами Jazz і Blues
//   Додайте 'Rock&roll' у кінець масиву
//   Виведіть у консоль перший елемент масиву
//   Виведіть у консоль останній елемент масиву.
//   Код має працювати для масиву довільної довжини.
//   Вставте 'Contry' та 'Reggie' на початок масиву

// const genres = ["Jazz", "Blues"];
// genres.push("Rock & roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// genres.unshift("Country", "Reggie");
// console.log(genres);

// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються в змінній величин у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = "8 11";
// const valuesArray = values.split(" ");
// const result = Number(valuesArray[0]) * Number(valuesArray[1]);
// console.log(result);

// Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
// і виводить його в консоль.
// Методи split reverse join

// const stringEl = "   Welcome to the future       ";
// const textArray = stringEl.split(" ");
// let result = "";
// for (let i = textArray.length - 1; i >= 0; i -= 1) {
//   result += textArray[i] + " ";
// }
// for (let i = 0; i < textArray.length; i += 1) {
//   result = textArray[i] + result;
// }
// for (let text of textArray) {
//   result = text + " " + result;
// }
// console.log(result.trim());

// function sumCount(arr) {
//   let total = 0;
//   for (let number of arr) {
//     if (Array.isArray(number)) {
//       const miniResult = sumCount(number);
//       total += miniResult;
//       continue;
//     }
//     total += number;
//   }
//   return total;
// }

// console.log(sumCount([[1, 3], 2, 5]));
