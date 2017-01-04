function addEventListener() {
}
var list = document.getElementById('Lista');
var newElem = document.createElement('li');
var add = document.getElementById('addElem');
add.addEventListener('click', function (addEventListener) {
	var numbersOfLi = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item ' + numbersOfLi + '</li>'
})