// Rubén y Janis
// Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.
// sumarElementos([-5, 10, -15, 20]); // Devuelve 10
// sumarElementos([1, 2, 3, 4, 5]); // Devuelve 15


const Array = [1, 2, 3, 4, 5];
function sumarElementos(array) {
    let suma = 0;
    for (const numb of array) {
        suma = suma + numb;
    }
    return suma
}
    
console.log(sumarElementos(array))

