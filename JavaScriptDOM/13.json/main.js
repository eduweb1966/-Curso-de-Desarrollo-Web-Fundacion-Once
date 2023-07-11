<<<<<<< HEAD
cont json=`
{
    "name:"steve",
    "age": 140,
    "city":"New Jersey"
}
`;

console.log("Esto es JSON:");
console.log(json);
// esto es el JSON parseado
const jsonPARSED = JSON.parse(json);
console.log(jsonPARSEADO);

// volvemos a convertir
console.log(JSON.stringify())
=======
const json = `
{
  "name":"Steve",
  "age": 140,
  "city":"New Jersey"
}`;

console.log("Esto es JSON:");
console.log(json);

//Esto es el json parseado
const jsonPARSED = JSON.parse(json);
console.log(jsonPARSED);

//Volvemos a convertirlo a JSON
console.log(JSON.stringify(jsonPARSED));
>>>>>>> 8f0400adbda5bac2c804c0bffb593362bc96224e
