var galezie = prompt('Podaj wysokość choinki')
// function rysujChoinkę(1) {
	for (var wiersz = 1; wiersz <= galezie ; wiersz++) {
		var star = '';
		for (var i = 0; wiersz *2 - 1 > i ; i++) {
			star +='*';
		}
		console.log(star);
	}
// }