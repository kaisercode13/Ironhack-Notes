// este es el syntax de un comentario para que segmente nuestro codigo en js que es diferente que en html

// La Consola
// // El objeto de console provee acceso a la consola de depuración de los navegadores (p.e. la consola web de chrome o firefox). Los detalles de como funciona varían de navegador en navegador, pero hay un conjunto de características que de facto son proporcionadas generalmente.

console.log("Ignorance is the cause of fear - Seneca");

// .log() aca en este caso especifico es un metodo nativo que muestra un mensaje en la consola web (o del interprete de JavaScript) y este mensaje en este caso es de tipo "string" que es un tipo de dato primitivo.



// El Documento
// La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la pagina web, que es el árbol DOM (Document Object Model).
// El árbol DOM incluye elementos como <body> y table>, entro otros. Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.

console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[8]);

// Modificar elementos HTML a través de JS
console.log(document.all[8].textContent = "Wu Tang Clan");
// console.log(document.all[8].innerText = "Wu Tang Clan");
// console.log(document.all[8].innerHTML= "Wu Tang Clan");

console.log(document.links);
console.log(document.images);

//Ejemplo de otro metodo de instancia ya que tiene una ocurrencia de algo, en js o en programacion estas funciones/metodos de instancia tienen ya por defecto un aplicativo como este ejemplo que seria crear una tabla en js.

// Tabla
//Syntax = console.table()
//Muestra datos tubulares como una table

//Muestra data como una tablea en la consola. Cada elemento en el array (o propiedad enumerable si data es un objeto) será una fila en la tabla.

//La primera columna de la tabla será identificada como (index). Si data es un array, sus valores serán los índices del arary. Si data es un objeto, entonces sus valores serán los nombres de las propiedades.
// Tenga en cuenta que (en Firefox) console.table está limitado a miostrar 1000 FileSystemHandle.

console.table(["Madrid", "Berlin", "München", "Budapest"]);
console.log(["Madrid", "Berlin", "München", "Budapest"]);