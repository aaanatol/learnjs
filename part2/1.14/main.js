let container = document.querySelector('.container');

var newLink = document.createElement('a');
newLink.className = "button";
newLink.innerHTML = "Нажми меня";
newLink.style.cssText = "-moz-border-radius: 8px; \
-webkit-border-radius: 8px; \
border-radius: 8px; \
border: 2px groove green; \
display: block; \
height: 30px; \
line-height: 30px; \
width: 200px; \
text-decoration: none; \
text-align: center; \
color: red; \
font-weight: bold; \
display: block";

container.appendChild(newLink);