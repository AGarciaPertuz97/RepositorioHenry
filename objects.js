// var deportes = { // Los objects se declaran con {} a diferencia de los arrays que son son [].
//     conBalon:["Futbol", "Basketball", "Rugby"],
//     sinBalon:["Boxeo", "Surf"]

// }; 

// ACCEDER
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// console.log(persona.edad);

// ASIGNAR
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// persona.nombre = 'Martín';
// console.log(persona.nombre);

//CREAR
    // var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);

// //BORRAR
// delete autos.marcas;
// console.log(autos);

// // DOT NOTATION
// var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// // BRACKET NOTATION
// atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

// // HAS OWN PROPERTY
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('año'); // Se utiliza para saber si tengo una propiedad en el objeto principal, lo que queramos saber se escribe dentro de los () y con "".

// console.log(tienePropiedad);

// KEYS
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro); // Se utiliza para saber todas las propiedas que contiene el objeto; se escribe dentro de ella el nombre del objeto que contiene las propiedades.
// console.log(todasLasPropiedades);

// Bucle for in
// var mundo = { continentes: 7, paises: 195, océanos: 5};

// for (let prop in mundo) {
//     console.log('Esta es la propiedad: ', prop); // por cada iteración le decimos que imprima "esta es la propiedad: " y al lado "prop"
//     console.log('Este es el valor: ', mundo[prop]); // aqui lo mismo, pero que imprima "este es el valor" y al lado el objeto y entre [prop]
//  }

 //THIS

 var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function () {
       console.log('Mi perro es un  ' + this.raza); // Para poder ver la raza en este caso, se debe escribir this.raza, sin el this. nos va a salir que el termino raza no está definido.
    },
 };

 mascota.info();