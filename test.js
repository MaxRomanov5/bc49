//Звернутися до елемента за допомогою класу,id та атрибуту
// Example:

// <p class="textClass open" id="textId" data-info="textData" data-fontSize="40" ></p>

// Змінити йому textContent на 'Ми змінили текст'

//Змінити йому клас 'textClass' на 'text'

// Затоглити клас 'open'

//Звернутися до елемента за допомогою класу,id та атрибуту
// const subtext = document.querySelector(`.textClass`); = class
// const subtext = document.querySelector(`.textClass`);

// const subtext = document.querySelector(`#textId`); = id

// const subtext = document.querySelector(`[data-info="textData"]`); = атрибут

// console.log(subtext);

// Змінити йому textContent на 'Ми змінили текст'
// console.log(typeof subtext.textContent);
// subtext.textContent = 'Ми змінили текст';
// console.log(subtext);

// Змінити йому клас 'textClass' на 'text'

// subtext.classList.replace('textClass', 'text');
// subtext.classList.add('something', 'something2');
// subtext.classList.remove('something2');

// Затоглити клас 'open'

// subtext.classList.toggle('open'); = turn on
// subtext.classList.toggle('open'); = turn off

// Меняем цвет и размер текста через инлайн - стиль

// subtext.style.color = 'green'; // Цвет
// subtext.style.fontSize = '30px'; // Текст

// Обращаемся и возвращаем значение атрибута

// subtext.dataset.info;
// console.log(subtext.dataset.info);

// Обращаемся и возвращаем значение атрибута

// subtext.dataset.fontsize;
// console.log(subtext.dataset.fontsize);
