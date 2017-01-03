
function addEventListener(param) {
  console.log(param);
}
var list = document.getElementById('Lista');
var newElem = document.createElement('li');
var add = document.getElementByID('addElem');

add.addEventListener('click', function (){
	list.innerHTML += '<li>item</li>'
	
})
