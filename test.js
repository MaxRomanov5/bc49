// // Створити новий масив з країнами, де всі країни,які мають в назві два
// //або більше слова, будуть мати в назві тільки останнє слово.
const countries = [
	{ name: 'Republic of Benin', population: 12123198, area: 112622 },
	{ name: 'Republic of Cuba', population: 11326616, area: 109884 },
	{ name: 'Commonwealth of the Bahamas', population: 393248, area: 13943 },
	{
		name: 'Virgin Islands of the United States',
		population: 106290,
		area: 347
	},
	{ name: 'Ukraine', population: 44134693, area: 603500 },
	{ name: 'Aruba', population: 106766, area: 180 },
	{ name: 'Swiss Confederation', population: 8654622, area: 41284 },
	{ name: 'Principality of Liechtenstein', population: 38137, area: 160 },
	{ name: 'Union of the Comoros', population: 869595, area: 1862 },
	{ name: 'Syrian Arab Republic', population: 17500657, area: 185180 },
	{ name: 'Nation of Brunei, Abode of Peace', population: 437483, area: 5765 },
	{ name: 'Country of Curaçao', population: 155014, area: 444 },
	{ name: 'Bailiwick of Guernsey', population: 62999, area: 78 },
	{ name: 'Republic of Liberia', population: 5057677, area: 111369 },
	{ name: 'Japan', population: 125836021, area: 377930 },
	{ name: 'Independent State of Samoa', population: 198410, area: 2842 },
	{ name: 'Solomon Islands', population: 686878, area: 28896 },
	{ name: 'Central African Republic', population: 4829764, area: 622984 },
	{ name: 'Italian Republic', population: 59554023, area: 301336 },
	{ name: 'Réunion Island', population: 840974, area: 2511 },
	{ name: 'Togolese Republic', population: 8278737, area: 56785 },
	{ name: 'Tunisian Republic', population: 11818618, area: 163610 },
	{ name: 'Republic of China (Taiwan)', population: 23503349, area: 36193 },
	{
		name: 'Democratic Republic of the Congo',
		population: 108407721,
		area: 2344858
	},
	{ name: 'United Mexican States', population: 128932753, area: 1964375 },
	{
		name: 'Lao Peoples Democratic Republic',
		population: 7275556,
		area: 236800
	},
	{ name: 'Republic of Namibia', population: 2540916, area: 825615 },
	{ name: 'Kingdom of Saudi Arabia', population: 34813867, area: 2149690 }
];

// let filteredCountries = [];

// for (let country of countries) {
//     const { name } = country;
// 	let splittedCountryName = name.split(' ');
// 	if (splittedCountryName.length > 1) {
// 		let pushCountry = {...country};
// 		pushCountry.name = splittedCountryName[splittedCountryName.length - 1];
// 		filteredCountries.push(pushCountry);
// 		continue;
// 	}
// 	filteredCountries.push(country);
// }
// console.log(countries);
// console.log(filteredCountries);

const classTutor = {
	students: [
		{ name: 'kriss', grades: { math: 9, geography: 10, physics: 7 } },
		{ name: 'jane', grades: { math: 6, geography: 10, physics: 7 } },
		{ name: 'alex', grades: { math: 9, geography: 4, physics: 7 } },
		{ name: 'gregory', grades: { math: 12, geography: 12, physics: 12 } },
		{ name: 'steve', grades: { math: 11, geography: 8, physics: 6 } },
		{ name: 'julia', grades: { math: 4, geography: 9, physics: 6 } }
	],

	//Написати функцію,яка буде повертати масив всіх студентів
	getStudents() {
		return this.students;
	},
	//Написати функцію,яка буде додавати студета до класу
	addStudent({name = 'Anon', grades : { math = 0 , geography = 0, physics = 0}}) {
		this.students.push({ name, grades: { math, geography, physics } });
	},
	//Написати функцію,яка буде повертати середню оцінку студета.Якщо студент не знайдений,то повертає 'Cтудент не знайдений'
	studentGrade(name) {
		let total = 0;

		for (let key of this.students) {
			if (key.name === name) {
				let digits = Object.values(key.grades);
				for (let fork of digits) {
					total += fork;
				}
				return (total / 3).toFixed(1);
			}
		}
		return 'Студент не знайдений';
    },
    
	// Написати функцію,яка буде повертати середню оцінку класу по певному предмету
	objectGrade(object) {},

	// Написати функцію,яки порахує середню оцінку всього класу по всім предметам
	classGrade() {}
};
console.log(classTutor.addStudent({name:'loly',grades:{math:6,geography:10,physics:5}}));
console.log(classTutor.addStudent({name:'jack',grades:{}}));
console.log(classTutor.addStudent({grades:{math:12,geography:3,physics:8}}));
console.log(classTutor.getStudents());



// console.log(classTutor.addStudent('loly', 3, 3, 5));
// console.log(classTutor.studentGrade('steve'));
// console.log(classTutor.classGrade());
// console.log(classTutor.studentGrade('kriss'));
// console.log(classTutor.objectGrade('math'));

// console.log(classTutor.getStudents());
