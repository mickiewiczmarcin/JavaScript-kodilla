function getTriangleArea(a, h) {	
	
	var triangleArea = (a * h/2)


	if ((a && h) <= '0') {
	console.log('Nieprawidłowe dane')
	}
	return triangleArea
}
console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15)
var triangle2Area = getTriangleArea(5, 26)
var triangle3Area = getTriangleArea(63, 5)

console.log(triangle1Area)
console.log(triangle2Area)
console.log(triangle3Area)