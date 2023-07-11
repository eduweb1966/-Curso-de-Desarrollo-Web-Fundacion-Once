//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulElement = document.createElement("ul");
countries.forEach((countries) => {
    const liElement = document.createElement("li");
    liElement.textContent = countries;
    ulElement.appendChild(liElement);

});
document.body.appendChild(ulElement);
console.log(countries)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elemento = document.querySelector('.fn-remove-me');
elemento.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementosen el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];