<<<<<<< HEAD
f
etch("");
.then((res) => ResizeObserver.jason());
.then((res) => console.log(res.result));
=======
//1º Pedimos la información a la URL con fetch
//Y ENTONCES
//2º Con esa respuesta, la convertimos a json
//Y ENTONCES
//3º Con esa respuesta en json la sacamos por consola

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => console.log(res.results));
>>>>>>> 8f0400adbda5bac2c804c0bffb593362bc96224e
