/* Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text". */

let textElement = document.getElementById('text');
let hideTextBtn = document.querySelector('.hide-text-btn');

hideTextBtn.addEventListener('click', (e) => {
  e.target.previousElementSibling.style.display = 'none';
});


/* Создайте кнопку, при клике на которую, она будет скрывать сама себя. */

// let hideItselfBtn = document.querySelector('.hide-itself-btn');
// hideItselfBtn.addEventListener('click', (e) => {
//   e.target.style.display = 'none';
// });


/* Создайте меню, которое раскрывается/сворачивается при клике: */
let toggleListText = document.querySelector('.toggle-list');
let listElement = document.querySelector('.list');

toggleListText.addEventListener('click', (e) => {
  e.target.classList.toggle('active');
});


/* Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия. */