var womensNames = ['Kasia', 'Asia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);
console.log(allNames);
var newNames = prompt('Wpisz dodatkowe imię');

if (allNames.indexOf(newNames) == -1) {
	var allAndNewNames = allNames.push(newNames);
	console.log(allNames);
}