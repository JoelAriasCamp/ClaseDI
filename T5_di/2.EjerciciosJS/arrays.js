/*ARRAYS
1. Dado el array = [1,2,3,4,5,6,7,8,9,10]*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++
}
//- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
array.forEach(element => {
  console.log(element);
})
//- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
const newArray = array.map(element => element + 1);
console.log(newArray);
//- Calcular la media de todos los elementos del array
const sum = array.reduce((acc, current) => acc + current, 0);
const media = sum / array.length;
console.log(media);


//2. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array. Una vez generados realiza las siguientes acciones:
//- Muestra por consola los pares
//- Muestra por cosola todos los numeros
//- Muestra el número máximo
//- Muestra el número mínimo
//- Muestra la media
const randomArray = [];

for (let i = 0; i < 20; i++) {
  const randomNumber = Math.floor(Math.random() * 100); // Números aleatorios del 0 al 99
  randomArray.push(randomNumber);
}

// Mostrar los pares
const pares = randomArray.filter(numero => numero % 2 === 0);
console.log("Pares:", pares);

// Mostrar todos los números
console.log("Todos los números:", randomArray);

// Mostrar el número máximo
const maximo = Math.max(...randomArray);
console.log("Máximo:", maximo);

// Mostrar el número mínimo
const minimo = Math.min(...randomArray);
console.log("Mínimo:", minimo);

// Calcular la media
const suma = randomArray.reduce((acc, current) => acc + current, 0);
const media1 = suma / randomArray.length;
console.log("Media:", media);

/*3. Crea un array con los siguientes valores:
```javascript
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```
Una vez tengas introducidos todos los valores realiza las siguientes tareas:
- Ordena el array y obten el valor máximo y mínimo
- Obtén la medida de edad*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

console.log("Edades ordenadas:", sortedAges);
console.log("Edad mínima:", minAge);
console.log("Edad máxima:", maxAge);
//

let median;

if (sortedAges.length % 2 === 0) {
  const middle1 = sortedAges[(sortedAges.length / 2) - 1];
  const middle2 = sortedAges[sortedAges.length / 2];
  median = (middle1 + middle2) / 2;
} else {
  median = sortedAges[Math.floor(sortedAges.length / 2)];
}

console.log("Mediana de edad:", median);


