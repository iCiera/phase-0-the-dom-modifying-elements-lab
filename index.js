// Write your code here!

const element = document.querySelector('main');
element.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'Ciera is the champion'
document.body.append(newHeader);


