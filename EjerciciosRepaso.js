// Ejercicios Condiciones y Objetos/Arrays
// Crea un objeto en la variable usuario de tal modo que el siguiente código no muestre por consola 'suspendes':


const usuario = {
    usuario: "object",
    nombre: "María",
    direccion: {ciudad: "Madrid"},
    intereses: "cocinar",
    trabajos: [0, { empresa: "Google" }
    ]
  };

// TEST 1
if (typeof usuario === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 2
  if (usuario.nombre === "María") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 3
  if (usuario.direccion.ciudad === "Madrid") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 4
  if (usuario.intereses.includes("cocinar")) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  // TEST 5
  if (usuario.trabajos.length === 2) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  
  // TEST 6
  if (usuario.trabajos[1].empresa === "Google") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  
// Ejercicios Bucles
// Dado un array de números, imprimir en la consola solo los números impares.
const números = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < números.length; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }

} 

// Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "Luisa", edad: 20 },
  { nombre: "Carlos", edad: 18 }
];

for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad > 18) {
    console.log(personas[i].nombre);
  }
}


// Utiliza la siguiente array para resolver los próximos ejercicios:

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

// Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.
let felinosMayoresDe4 = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === "Felino" && animales[i].edad > 4) {
    felinosMayoresDe4.push(animales[i]);
  }
}
console.log(felinosMayoresDe4);


// Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.
let herbívorosPar = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === "Herbívoro" && animales[i].edad % 2 === 0) {
    herbívorosPar.push(animales[i]);
  }
}
console.log(herbívorosPar);


// Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.
let omnívorosOaves = [];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === "omnívoro", "ave" && animales[i].edad < 3) {
    omnívorosOaves.push(animales[i]);
  }
}
console.log(omnívorosOaves);

// Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.
let arrayanimales = [];

for (let i = 0; i < animales.length; i++) {
  //console.log(animales[i].nombre[0])
  if (animales[i].especie[0] === "H") {
    //console.log(animales[i]);
    arrayanimales.push(animales[i]);
  } 
}
console.log(arrayanimales);


// Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.
let omnívorosOhervivoro = [];

for (let i = 0; i < animales.length; i++) {
  const animal = animales[i];
    if (animal.nombre.length >= 4 && (animal.especie === "Felino" || animal.especie === "Herbívoro")) {
    omnívorosOhervivoro.push(animales);
    }
}
console.log(omnívorosOhervivoro);

// Ejercicios Funciones

// Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.

// contarCaracteres(["Hola", "Mundo"]); // Devuelve 9  


// console.log("totalCaracteres", array);



// contarCaracteres(["JavaScript", "es", "genial"]); // Devuelve 18



// Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.
// cadenaMasLarga(["Hola", "Mundo"]); // Devuelve "Mundo"
// cadenaMasLarga(["JavaScript", "es", "genial"]); // Devuelve "JavaScript"
