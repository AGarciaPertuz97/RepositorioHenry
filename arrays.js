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

// var numeros = [10, 6, 8, 9]; // Se utiliza para saber si todos los elementos de un arreglo cumplen con una condicion determinada.
// var cumplenCondicion = numeros.every((num) => {
//     return num > 5;
// });
// console.log(cumplenCondicion);


// Método Split

// var palabra = "Henri";
// var palabraSeparada = palabra.split(""); ///Con las 2 comillas le indicamos al método que queremos que separe la palabra en cada letra o caracter.
// palabraSeparada.pop(); // Para eliminar la ultima palabra usamos .pop
// palabraSeparada.push("y"); // Para agregar una palabra al final usamos .push
// // console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join(''); // Al usar las 2 '' le indiicamos al método juntar todos los caracteres.
// console.log(palabraArreglada);



// Método .forEach
// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num)); // Este método nos muestra cada numero por separado.
// numeros.forEach((num) => {    //Aqui lo usamos para que nos imprimas solo los caracteres iguales a 3.
//     if (num === 3) {
//         console.log(num)}
//     });          // Este método solo realiza alguna accion sobre el arreglo que especificamos, pero no generará NINGÚN cambio.


// Método .map
// var masUno = numeros.map((num) => { 
//     return num + 1;
// });
// console.log(masUno);

// En resumen, los métodos SPLIT Y JOIN nos permiten transformar 'strings' en arreglos y viceversa.
// El método forEach nos permite recorrer elemento por elemento y el método Map lo mismo, pero con la diferencia
// de que el metodo map crea una copia del arreglo y permite realizar cambios.


