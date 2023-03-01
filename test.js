// Створіть масив genres з елементами Jazz і Blues
//   Додайте 'Rock&roll' у кінець масиву
//   Виведіть у консоль перший елемент масиву
//   Виведіть у консоль останній елемент масиву.
//   Код має працювати для масиву довільної довжини.
//   Вставте 'Contry' та 'Reggie' на початок масиву

const genres = ["Jazz", "Blues"];
genres.push("Rock & roll");
console.log(genres[0]);
console.log(genres[genres.length - 1]);
genres.unshift("Country", "Reggie");
console.log(genres);
