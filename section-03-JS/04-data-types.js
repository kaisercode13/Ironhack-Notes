// Data Types JS

//Tenemos dos tipos de datos en este tipo de lenguaje

//Tenemos datos primitivos y no promitivos. En pocas palabras los datos primitivos representan un valor y os datos no primitivos los podemos entender como composiciones de datos primitivos, que vendrian sendo lo que en JS llamamos "Objetos o Arrays".

//En JS tenemos 6 tipos de datos primitivos:

// --numeros
// --strings
// --Booleanos
// --null
// -- undefined
// --simbolos

// Numeros
console.log(8);
console.log(8.5);
// nan === not a number
let f = "Hello";
console.log(8 / f);

// Strings
console.log("Wu Tang is for the children");
console.log('Wu Tang is for the children');
console.log("8"); // esto se parsea como un String ya que el "8" está dentro de comillas dobles.

// Booleanos - TRUE || FALSE
console.log(true);
console.log(false);

//null
console.log(null);


//Undefined
let diego = undefined;

// ESTO NO ES LO MISMO PORQUE JS LO PARSEA COMO UN STRING VACIO YA QUE TIENE LOS DOBLEQUOTES DESPUES DE INICIAR LA VARIABLE
// let diego = "";
console.log(typeof diego);

// Symbol
let barcelona = Symbol("born");
console.log(typeof barcelona);
console.log(Symbol("born") === Symbol("born"));

// Datos NO PRIMITIVOS

// -Arrays
// -Objetos

// Datos No Primitivos - Examples

// Array
console.log("This is my cool table of Funk Artists");
console.log("Using just strings");
console.table([
    "Daft Punk",
    "Mark Rebillet",
    "Jamiroquai",
    "Silk Sonic",
    "Los Amigos Invisibles",
    ]);

    console.log("This is my cool table of Funk Artists");
    console.log("Using just strings");
    console.table([
        "Daft Punk",5,
        "Mark Rebillet",false,
        "Jamiroquai", undefined,
    ]);
        
console.table([
     "Blink-182",
     "Swedish House Mafia",
     "Jamiroquai",
     "Avicii",
     "Dusty Sringfield",
]);


// Objetos
// ejemplo syntax init= {}  
// ejemplo syntax context {key: "value"}
console.log("My Bio");
console.table({
    firstName: "Alex",
    lastName: "Reinhardt",
    occupation: "Unempolyed",
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
});

//Ejemplo 2
// Array of Objects
const movies = [{
    movie: "Wolf of Wall Street",
    genre: ["Drama", "Action", "Comedy"],
    director: ["Martin Scorsese"],
    location: "New York City, NY",
    actors: ["Jonah Hill", "Margot Robbie", "Leo Di Caprio"],
    year: 2010,
},
{
    movie: "Fight Club",
    genre: ["Drama", "Action", "Comedy", "Noir"],
    director: ["David Fincher"],
    location: "Los Angeles, CA",
    actors: ["Brat Pitt", "Edward Norton", "Helena Bonham Carter"],
    year: 1999,
    },
{
    movie: "The Neon Demon",
    genre: ["Aleix", "Thriller", "Drama"],
    director: ["Nicholas Winding"],
    location: "Copenhaguen, Denmark",
    actors: ["Elle Fanning", "Jenna Malone", "Keanu Reeves"],
    year: 2016,
    },
];

console.log(movies[0].actors[1]);
//Conventional Way - Prior ES6
console.log("My favorite actor of the movie Wolf of Wallstreet is " +movies[0].actors[1]);

// Modern Way - Post ES&
// template Literals
console.log(`My fav actor of wolfie using template literals would be ${movies[0].actors[1]}`);
    
// Exercise 1
const myself = {
    firstName: "Alex",
    lastName: "Reinhardt",
    citiesILivedIn: ["Barcelona", "Hannover"],
    age: 35,
    dob: "January 29th, 1987",
    drinkAlcohol: false,
};

console.log(`Am I an alcoholic ${myself.drinkAlcohol}`);


// Exercise 2
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

console.log(`My favorite book is ${books[1].bookName}`)