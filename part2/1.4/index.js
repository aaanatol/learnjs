// 1)

// //Напишите код, который получит элемент HEAD.
// console.log(document.head);
// console.log(document.documentElement.firstElementChild);
// console.log("----------------");

// //Напишите код, который получит UL.
// console.log(document.body.children[1]);
// console.log("----------------");

// // Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?
// console.log(document.body.children[1].lastElementChild);


// 2)
// Придумайте самый короткий код для проверки, пуст ли элемент elem.
// «Пустой» – значит нет дочерних узлов, даже текстовых.

// function hasChildNodes(elem) {
//   return elem.childNodes.length ? 'full' : 'empty';
// }

// console.log(hasChildNodes(document.body.children[1].lastElementChild));



// 3) 
// Напишите код, который выделит все ячейки в таблице по диагонали.
// Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

var table = document.body.children[0];

for (let i = 0; i < table.rows.length; i++ ) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}