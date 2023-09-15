#!/usr/bin/node

const new_array = new Array(5, 2, 3)
const new_array2 = []

new_array[0]= 1
new_array[1]= 2
new_array.push(4)
console.log(new_array)
new_array.fill(10, 0)


//calcular la longitud de un array

const arr = [1,2,3,4,5]
len = arr.length
console.log(arr.length)
console.log(len)


/*
 Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.*
 */
function sumar(a)
{
let sum = 0
let i;
for(i=0;i < a.length; i++)
{
 sum = a[i] + sum  
}
return sum
}

const new_array3 = [1,2]
sumar(new_array3)
console.log(sumar(new_array3))

//Escribe una función que encuentre el elemento máximo en un array de números y lo devuelva.

function sumar2(a)
{
let i;
let y = 0;
let aux;
for(i=0;i< a.length; i++)
{
  if(a[y]>a[y+1])
  {
  aux = a[y]
  a[y]=a[y+1]
  a[y+1] = aux
  }
  y = y + 1
}
return aux
}

const new_array4 = [5,2,4,1]
console.log(sumar2(new_array4))

/*Escribe una función que reciba un array de números y 
devuelva la cantidad de elementos pares que contiene.
*/

function array_pares(a)
{
let i;
let cant = 0;
for(i=0;i<a.length;i++)
{
if(a[i]%2==0)
{
 cant = cant + 1  
}
}
return cant
}
const data = [1,3,4,8,9,10]
array_pares(data)
console.log(array_pares(data))

/* Duplicar elementos
Escribe una función que reciba un array de 
números y devuelva un nuevo array donde cada elemento se duplique.*/
function duplicarElementos(array, cantidad) {
  const nuevoArray = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < cantidad; j++) {
      nuevoArray.push(array[i]); // Agrega el elemento al nuevo array 'cantidad' veces
    }
  }

  return nuevoArray;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4];
const cantidadDuplicados = 2;
const arrayDuplicado = duplicarElementos(numeros, cantidadDuplicados);
console.log(arrayDuplicado);
// Output: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]


/*
Escribe una función que reciba un array de números y un número objetivo, y 
devuelva true si el número objetivo se 
encuentra en el array, o false en caso contrario. */


