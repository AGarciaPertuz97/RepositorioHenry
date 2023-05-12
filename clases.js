// FUNCIÓN CONSTRUCTORA

//  function Auto(puertas, color, marca, año, ruedas) {
//     this.puerta = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function (){ 
//         console.log("Este es un " + this.marca + " de color " + this.color);
//     }
//  }

// var miPrimerAuto = new Auto (2, 'rojo', 'Ferrari', 2023, 4);

// miPrimerAuto.informacion();

// // console.log(miPrimerAuto);
// // console.log(miPrimerAuto.marca);


// EXPRESIÓN DE CLASE

// class Auto {
//     constructor(puertas, color, marca, año, ruedas){
//         this.puerta = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;
//     }

//     informacion() {
//         console.log("Este es un " + this.marca + " de color " + this.color);
//     }
// }

// var miSegundoAuto = new Auto(4, "Blanco", "Fiat", 2015, 4);


// miSegundoAuto.informacion();
// // console.log(miSegundoAuto);
// // console.log(miSegundoAuto.marca);




// Respuesta alterna MODULO 7 EJERCICIO 01

// function Usuario(usuario, nombre, email, password) {
//     this.usuario = usuario;
//     this.nombre = nombre;
//     this.email = email;
//     this.password = password;
//   }
//   Usuario.prototype.saludar = function() {
//     return "Hola, mi nombre es " + this.nombre;
//   };
//   return Usuario;