// Write your code here!

document.body.removeChild(document.body.querySelector("main#main"));

var newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Ryan is the champion"
document.body.append(newHeader);

