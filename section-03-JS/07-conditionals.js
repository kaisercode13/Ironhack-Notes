// JS Conditionals

// In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.

// In such situations, you can use the JavaScript if...else statement to create a program that can make decisions.

// In JavaScript, there are three forms of the if...else statement.
// 1. if statement
// 2. if...else statement
// 3. else...if statement

//JS - IF Statement

// Syntax
// if (condition) {
//   // body del condicional if
// }

// Ejemplo - Condicionar si un numero es positivo!
// check if number is positive o mayor que0
// const number = prompt("Enter a number:   ");

// // aca nos condicionamos el numero .
// if (number > 0) {
//   console.log(" Este numero es positivo");
//   console.log(
//     "Es una caso condicional que solo estamos ejecutando una condicion"
//   );
// }

// JS  - IF ELSE Statement
// Si un IF tiene un condicional opcional, podemos usar este condiconal opcional para ejecutar codigo en base que la condicion IF inicial sea falsa.
// Syntax
// if (condition) {
//     // body del condicional if
// } else {
//     // body del condicional else
// }

// if (number > 0) {
//   console.log(" Este numero es positivo");
// } else {
//   console.log(" Este numero es negativo");
//   console.log(
//     "Es un caso en base a la condicion inicial que sea un valor falso"
//   );
// }

//JS - ELSE IF Statement
// El condicional else if nos habilita la capacidad de condicionar +1(multiples) alternativas en base a las condiciones que queramos.
// Syntax - terminando con un else {}
// if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else {
// }

// Syntax - terminando sin un else {}
// if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// }


// Ejemplo

// Number Check

// const drinkingAge = parseInt(prompt("Want to buy beer? - Let me see your ID"));

// if (drinkingAge < 18) {
//     console.log("I am sorry you're too young to drink beer.");
// } else if (drinkingAge === 18) {
//     console.log("You just turned 18, what type of beer would you want to enjoy");
// } else if (drinkingAge >= 18 && drinkingAge < 40) {
//     console.log("Enjoy your night, but don't drive bro");
// } else if (drinkingAge >= 40) {
//     console.log("Man don't forget you Viagra if you want to perform tonight");
// }

// Ejercicio Práctico
// Opción 1 console.log

// const costumerAge = parseInt(prompt("Are you elegible for a discount? - Let me see your ID"));

// if (costumerAge <= 5) {
//     console.log("Access is free for you. Behave yourself kid.");
// } else if (costumerAge < 15) {
//     console.log("You got yoursef a 15% discount.");
// } else if (costumerAge >= 15 && costumerAge < 60) {
//     console.log("You're paying the full price");
// } else if (costumerAge >= 60) {
//     console.log("You're old man, here's your 40% discount");
// }

// Opción 2 alert
// const costumerAge = parseInt(prompt("Are you elegible for a discount? - Let me see your ID"));

// if (costumerAge <= 5) {
//     alert("Access is free for you. Behave yourself kid.");
// } else if (costumerAge < 15) {
//     alert("You got yoursef a 15% discount.");
// } else if (costumerAge >= 15 && costumerAge < 60) {
//     alert("You're paying the full price");
// } else if (costumerAge >= 60) {
//     alert("You're old man, here's your 40% discount");
// }

// Ejemplo sencillo - sin type checking
// let switchExample1 = 2;
// switch (switchExample1) {
//     case 1:
//         switchExample1 = "one";
//         break;
//     case 2:
//         switchExample1 = "two";
//         break;
//     default:
//         switchExample1 = "not found";
//         break;
// }

// console.log(`The value is ${switchExample1}`);

// Ejemplo comlejo - Switch - Calculadora
// const operator = prompt("Enter operator (either +, -, * or /:");

// // Variables para recibir los inputs del usuario:
// const calcNum1 = parseFloat(prompt("Enter 1st number:"));
// const calcNum2 = parseFloat(prompt("Enter 2nd number:"));

// switch (operator) {
//     case "+":
//         result = calcNum1 + calcNum2;
//         console.log(`${calcNum1} + ${calcNum2} = ${result}`);
//         break;
//     case "-":
//         result = calcNum1 + calcNum2;
//         console.log(`${calcNum1} - ${calcNum2} = ${result}`);
//         break;
//     case "*":
//         result = calcNum1 + calcNum2;
//         console.log(`${calcNum1} * ${calcNum2} = ${result}`);
//         break;
//     case "/":
//         result = calcNum1 + calcNum2;
//         console.log(`${calcNum1} / ${calcNum2} = ${result}`);
//         break;
//     default:
//         console.log("This is not a valid operator. Try again");
// }

//Ejemplo comlejo - Switch - Country  Continent Finder - Casos Multiples -Lower Case methods
const countryOfOrigin = prompt("What country where you born?").toLowerCase();
switch (countryOfOrigin) {
    case "venezuela":
    case "argentina":
    case "colombia":
    case "chile":
        alert(`Cool, ${countryOfOrigin} is located in South America`);
        console.log(`Cool, ${countryOfOrigin} is located in South America`);
        break;
    case "spain":
    case "france":
    case "portugal":
    case "germany":
        alert(`Cool, ${countryOfOrigin} is located in Europe`);
        console.log(`Cool, ${countryOfOrigin} is located in Europe`);
        break;
    default:
        alert("you're not fromt this planet");
        console.log("you're not fromt this planet");
}

