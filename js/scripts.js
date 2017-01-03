var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var elephant = "Zielone słonie";
var bigGreenElephant = elephant.toUpperCase();
var animal = text.replace(text.slice(0,text.indexOf(' ')), bigGreenElephant);
console.log(animal.length);
var partOfAnimal = animal.slice(0, animal.length / 2);
console.log(partOfAnimal);