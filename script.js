/*

Javascript es un lenguaje de programación de tipado débil que corre en el navegador


*/

/* variable*/

/*elegir el tipo de cajita  

    let: son para cajita que les podemos cambiar la estructura

    const: cajitas que no les puedes cambiar la estructura

        innamovible: si son datos sencillos, números, palabras, booleanos
        pero para las listas y objetos lo importante es que siguan siendo o listas o objetos pero si les peudes poner
        más objetos adentro a las listas o sacarle objetos y a los objetos ponerles o quitarles porpiedades


*/

const nombre = "Malinali Becerril Bernal"

/* Salidas */


//alert(nombre);

console.log(nombre);

document.write(nombre);

console.log(document.getElementById('titulo'));
let elementoHTMLTitulo = document.getElementById('titulo');

let elementoDeTypewriter = new Typewriter(elementoHTMLTitulo, {
    loop: true
});

elementoDeTypewriter.typeString('Valeria Salazar')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Web')
    .pauseFor(2500)
    .deleteAll()
    .start();