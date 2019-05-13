// Write your code here!

//removes the DOM Node "main"
document.body.querySelector('main').remove()

//creates a newHeader' variable that points to node h1#victory
var newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "YOUR NAME is the champion"
document.body.append(newHeader)
