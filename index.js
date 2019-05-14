// Write your code here!
document.querySelectorAll('main')[0].remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.className = "victory"
