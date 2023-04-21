// Lista de compras
//var listaDeCompras = []; // Se utiliza este tipo de corche [] y no {}.
//listaDeCompras[3] = 'Tomates'; //Se utiliza este tipo de corche [] y no {}.
//listaDeCompras[1] = 'Lechuga'; //Se utiliza este tipo de corche [] y no {}.

//var elementoDelArray = listaDeCompras[1]; //Se utiliza este tipo de corche [] y no {}.
// Para recuperar un arreglo solo necesitamos escribir el nombre de arreglo y entre corchetes, el índice que queremos recuperar
//console.log(elementoDelArray);




// El método más utilizado y más sencillo en arreglos se llama Length.
// El método Length nos permite saber cuantos elementos contiene un arreglo

 // En el siguiente ejemplo, utilizaremos el metodo Length.

//var listaDeCompras = []; // Se utiliza este tipo de corche [] y no {}.
//listaDeCompras[3] = 'Tomates'; //Se utiliza este tipo de corche [] y no {}.
//listaDeCompras[1] = 'Lechuga'; //Se utiliza este tipo de corche [] y no {}.

//console.log(listaDeCompras.length);


// Lenght
//var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
//console.log(nombres);


// var colores = ['amarillo', 'azul'];
// colores.push('rojo'); //Para añadir un elemento al final del arreglo
// colores.unshift('verde');// Para añadir un elemento al principio del arreglo.
// colores.pop(); // Para eliminar el ultimo elemento de nuestro arreglo, se debe escribir xxxx.pop antes del console.log .
// colores.shift() // Se utiliza para eliminar el primer elemento de nuestro arreglo, se debes escribir xxxx.shift antes del console.log .
// console.log(colores);


// Método Includes.
// var pintores = ['Picaso', 'Velasquez', 'Van Gogh', 'Dalí']
// var incluyeDalí = pintores.includes('Monet'); // Este metodo nos sirve para determinar si un arreglo incluye o no un elemento
// console.log(incluyeDalí);


// Método Every

var numeros = [10, 6, 8, 9]; // Se utiliza para saber si todos los elementos de un arreglo cumplen con una condicion determinada.
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion);