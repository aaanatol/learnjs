// **************************************************************
// 1).

// Получите div в переменную.
// Получите значение атрибута "data-widget-name" в переменную.
// Выведите его.

// const divElement = document.getElementById('widget');
// const divElementDataWidgetName = divElement.dataset.widgetName;
// console.log(divElementDataWidgetName);



// **************************************************************
// 2)

// Сделайте желтыми внешние ссылки, добавив им класс external.
// Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.

const allLinks = document.querySelectorAll('ul a');

for (let i = 0; i < allLinks.length; i++) {
  let linkText = allLinks[i].getAttribute('href');

  if(linkText.includes('://') && !linkText.startsWith('http://internal.com')) {
    allLinks[i].classList.add('external');
  }
}
