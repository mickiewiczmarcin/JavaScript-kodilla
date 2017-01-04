var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
var value = (a * a) + (2 * a * b) - (b * b);
if (value > 0 ) {
	console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else {
	console.log('Wynik równy 0');
}