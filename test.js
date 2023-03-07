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


// Напиши функцію для гри в Бінго. Гравцю даються рандомні числа,які він збирає(в масив).
//Для цього треба записати число в змінну.
//Якщо гравець отримав число,яке в нього є,то він його не може взяти другий раз і функція викликає сама себе знову.
//Коли гравець збирає числа від 1 до 5,то він перемагає і функція повертає рядок 'БІНГО' , масив очищається і фунція більше себе не викликає.
// Рандомні числа исла отримуються за допомогою допоміжної функції RandomNumber.

// function randomNumber(){
// return (Math.random() * (5 - 1) + 1).toFixed(0)
// }

// let playerDesk = [];



// function bingoGame() {
//     let number = randomNumber()
//     if (playerDesk.includes(number)) { 
//         console.log(`Таке число вже є! ${number}`); 
//         bingoGame()
//         return 
//     } playerDesk.push(number)
//     console.log(`Додаємо число ${number}`);
//     if (playerDesk.length === 5) { 
//         console.log(`БІНГО! `);
//         playerDesk.splice(0, playerDesk.length)
//         return
//     } bingoGame()
// }
// bingoGame()




// function includes(array, value) {
    
//   // return array.includes(value) ? true : false;
//   for (let i = 0; i < array.length; i++)
//     {if (Number(array[i]) === value) {
//     return true};
     
//     }
//     return false;

//   }
  

// console.log(includes([1, 2, 3, 4, 5], 4))
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
for (const key in apartment) {
    keys.push(key);
  };
  for (const value in apartment) {
    values.push(value);
  };

  console.log(keys);
  console.log(values)
