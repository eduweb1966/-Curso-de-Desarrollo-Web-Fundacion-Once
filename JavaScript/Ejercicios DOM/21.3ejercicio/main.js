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

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementosen el div de html con el atributo data-function ="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHereDiv = document.querySelector('[data-function ="printHere"]');
const ul = document.createElement('ul');

cars.forEach(cars => {
  const li = document.createElement('li');
  li.textContent = cars;
  ul.appendChild(li);
});
printHereDiv.appendChild(ul);
console.log(cars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.
//const countries = [
//{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
//{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
//{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
//{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
//{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
//];

const countries2 = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'},
  ];
  
  countries2.forEach(country => {

    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = country.title;
  
    const img = document.createElement('img');
    img.src = country.imgUrl;
    img.alt = country.title;
    div.appendChild(h4);
    div.appendChild(img);
 
    document.querySelector('[data-function="printHere"]').appendChild(div);
  });
  console.log(countries)

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.



//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.

 