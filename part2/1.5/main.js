
// // 1). Найдите (получите в переменную) в нём:

// console.log('Все элементы label внутри таблицы. Должно быть 3 элемента.');

// const table = document.getElementById('age-table');
// let allLabels = table.getElementsByTagName('label');
// console.log(allLabels);

// console.log("--------------------------------");

// // *********************************************


// console.log('Первую ячейку таблицы (со словом "Возраст").');

// // let firstCell = table.getElementsByTagName('td')[0];
// let firstCell = table.querySelector('td');
// console.log(firstCell);

// console.log("--------------------------------");

// // *********************************************


// console.log(' Вторую форму в документе.');

// let secondForm = document.getElementsByTagName('form')[1];
// // let secondForm = document.querySelector('form:nth-of-type(2)');
// console.log(secondForm);

// console.log("--------------------------------");

// // *********************************************


// console.log('Форму с именем search, без использования её позиции в документе.');

// let searchForm = document.querySelector('form[name="search"]');
// console.log(searchForm);

// console.log("--------------------------------");

// // ********************************************


// console.log('Элемент input в форме с именем search. Если их несколько, то нужен первый.');

// let inputSearchForm = document.querySelector('form[name="search"] input');
// console.log(inputSearchForm);

// console.log("--------------------------------");

// // ********************************************


// console.log('Элемент с именем info[0], без точного знания его позиции в документе.');

// let infoZero = document.querySelector('[name="info[0]"');
// console.log(infoZero);

// console.log("--------------------------------");

// // ********************************************


// console.log('Элемент с именем info[0], внутри формы с именем search-person.');

// let infoZeroInsideForm = document.querySelector('form[name="search-person"] [name="info[0]"');
// console.log(infoZeroInsideForm);

// console.log("--------------------------------");

// // ********************************************




// 2) 
// Есть дерево из тегов <ul>/<li>.
// Напишите код, который для каждого элемента <li> выведет:
// Текст непосредственно в нём (без подразделов).
// Количество вложенных в него элементов <li> – всех, с учётом вложенных.

let lis = document.querySelectorAll('li');
console.log(lis);

for (i = 0; i < lis.length; i++) {
  var title = lis[i].firstChild.data;
  title = title.trim(); // убрать лишние пробелы с концов

  var childCount = lis[i].getElementsByTagName('li').length;
  console.log((title + ': ' + childCount));
}