let parent = document.getElementById('parent');
let child = document.querySelector('strong');
let anotherChild = document.querySelector('p');

// var result = parent.contains(child);
// console.log(result);

var result = parent.compareDocumentPosition(anotherChild);
console.log(result);