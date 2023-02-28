// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату
//"14 г. 26 хв.".Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.
// const hours = 14;
// const minutes = 2;
// if (minutes === 0) {
//   console.log(`${hours} г.`);
// } else {
//   console.log(`${hours} г. ${minutes} хв.`);
// }

// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue,
//якщо воно не рівне undefined або null.В іншому випадку має присвоюватися значення defaultValue.Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.Використовуй оператор ?? (nullish coalescing operator).

// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError
// (null || undefined) ?? "foo"; // returns "foo"

const incomingValue = 5;
const defaultValue = 10;
const value = (incomingValue || defaultValue) ?? ;
console.log(value);
