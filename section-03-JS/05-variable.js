// JavaScrip Variables

//ref

// En programacion, una variable coloquialmente se define como un contenedor (storage area) donde guardamos inforamción/data.

//Ejemplo:

let number = 6

// Aquí number es una variable que esta guardadno datos que casualmente es un tipo de dato primitivo que ya conocemos como el Data Type (DT) = "Number".

//JavaScript Declacracion de Variables
// En JS, tenemos basicamente 3 maneras de declarar variables

// var, let, const [RESERVED KAYWORDS]

var x;
let y;

// En este caso particular, hemos declarado las variables, que tiene nombre x & y. En esencia estas variables están vacías, ya que no hemos guardado dentro de la variable nungún dato.

// Como asignar valor a nuestro beneficio. Usamos un operador de designación "=" para asignarle un valor a una variable.

y = "The Red Hot Chilli Peppers";
console.log(`The new value of this variable is: ${y}`);
y = 8;
console.log(`The new value of this variable is: ${y}`);

// Condiciones de nomenclatura que podemos referenciar para aclarar dudas:

// Los namings de las variables pueden ser de: ["letra", "pisoAbajo", "guionBajo", "underscore", "simbolo de $"]

// Valido
let a = "Hola";
let _a = "Hola";
let $a = "Hola";
console.log(a, _a, $a);

// NO es Valido
// NO es valido nombrar variables empezando por un numero
// 
//JavaScript es "Case Sensitive", sensible a las mayusculas

let jarko = "A great developer";
let Jarko = "A gaming enthusiast";
console.log(jarko);
console.log(Jarko);

// KEWWORDS NO ACEPTADAS
// Palabras que no podemos usar para inicializar variables
// new = palabra reservada

// let new = 5; // Da error, palabra reservada

// Podemos nombrar variables a nuestro gusto, pero es correcto usar nombres descriptivos para asignar sus variables. Por ejemplo, si estamos creando una variable como hicimos para el ejercicio de libros, es correcto llamar a la variable books en vez de x, y o z.

// En JS siempre se debe de usar la convencion de nomenclatura que se llama "camelCase" para nombrar variables de mas de una palabra.

// Var - Convention
// 1. Ya no se usa "var" para declarar variables.
// 2. Se puede reasignar como hicimos con var
// 3. Se ve bastante en preguntas online, tengan en cuenta que estan viendo codigo desactualizado.

// syntax - var

var firstName = "Alex";

console.log(firstName);

// Let - Convention
// 1. Se puede reasignar como hicimos con var
// 2. Current/modern approach

// syntax - let

let favoriteGuitarPlayer = "Gustavo Cerati";
console.log(favoriteGuitarPlayer);
// Reasignación
favoriteGuitarPlayer = "Jimmy Hendrix";
console.log(favoriteGuitarPlayer);

// Const - Convention
// 1. No se puede reasignar como con var y let
// 2. Es la convencion mas moderna de usar variables en JS.
// 3. NO podemos declarar una constante son inicializarla.

// syntax - const

const rockGroup = "Led Zeppelin"
console.log(rockGroup);

// rockGroup = "The Doors"; || No se puede hacer

// Ejemplo sin inicializacion
// const bestHipHopGroup; // Error! Missing initializar in const declaration
// console.log(bestHipHopGroup);

// Ejemplo de guardar datos en variables

// Ejemplo - String
const myMessage = "JS is legit";
console.log(myMessage);

//Ejemplo - Boolean
const isTrue = true;
console.log(isTrue);

// Ejemplo - Arrays
const books = [{
    bookName: "Angel's Game",
    genre: ["Novela", "Thriller", "Drama"],
    author: "Carlos Ruiz Zafon",
    year: 2008,
    ISBN: 9780297855552,
},
{
    bookName: "The Art of War",
    genre: ["Self Help", "War", "Business"],
    author: "Sun Tzu",
    year: 221,
    ISBN: 9780140439199,
},
{
    bookName: "Think Fast, Think Slow",
    genre: ["Psicology", "Essay", "Human Behavior"],
    author: "Daniel Kahneman",
    year: 2011,
    ISBN: 9780141033570,
},
];

console.table(books);

// Ejemplo - Objects

let myBio = {
    firstName: "Alex",
    lastName: "Reinhardt",
    occupation: "Unempolyed",
    age: 35,
    hobbies: ["Music", "Films", "Cycling", "Football", "Surfing"],
    skills: {
        surfing: "Excellent",
        skiing: 0,
        guitar: ["Acoustic", "Electronic"],
        instruments: {
            percussion: ["Drums", "Toms", "Snares"],
            string: ["Guitar", "Bass", "Cuatro"],

        },
    },
};

console.table(myBio);

// Ejercicio 1
let hobbies
hobbie= "Leer"
console.log(`Hola mi nombre es ${myBio.firstName} ${myBio.lastName} tengo ${myBio.age} años y me gusta ${hobbie}`);
hobbie = "Nadar"
console.log(`Hola mi nombre es ${myBio.firstName} ${myBio.lastName} tengo ${myBio.age} años y me gusta ${hobbie}`);
hobbie = "Boxear"
console.log(`Hola mi nombre es ${myBio.firstName} ${myBio.lastName} tengo ${myBio.age} años y me gusta ${hobbie}`);
hobbie = "Fumar"
console.log(`Hola mi nombre es ${myBio.firstName} ${myBio.lastName} tengo ${myBio.age} años y me gusta ${hobbie}`);
hobbie = "dormir"
console.log(`Hola mi nombre es ${myBio.firstName} ${myBio.lastName} tengo ${myBio.age} años y me gusta ${hobbie}`);