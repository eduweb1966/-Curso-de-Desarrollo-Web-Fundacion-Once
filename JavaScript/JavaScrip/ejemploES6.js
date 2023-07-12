const superheroes =[
{
name : "Wolverine",
type: "Mutant",
power: " 86,"
},
name:"Wolverine",
type:"Mutant",
power:"86",
{
name:"Iron Man",
type:"Human",
power:"70",
},
{
name:"Storm",
type:"Mutant",
power:"79",
},
];
//1º tenemos que comprobar si hay algun mutante en los superheroes
const mutantCheck = superheroes.some((superheroe) => superheroe.type === "Mutant");
console.log("¿Hay algun Mutaante, mutnCheck")

//2º Tenemos que creaR UN ARRAY CON SOLO MUTANTES
const mutants = superheroes.filter((superheroe) => superheroe.type ==="Mutant");

//3º tenemos que cambiar un array 
const newMutants = mutants.map((mutant) => ({
Superhername: mutant.name,
type: mutant.type,
power: mutant.power,
}));
console.log(newMutants);
//4º tenemos que tener el total se los superpoderes

const totalPower = newMutant.reduce ((acc, mutant) => acc + mutant, 0);
console.log()
//se puede hacer todo a la vez

const totalMutantPower = superheroe
.filter((superheroe) => superheroe.type === "Mutant")
.map((mutant) => ({
Superheroeame: Mutant.name,
type: mutant.power,
power: mutant.power,
}))
.reduce ((acc, mutant) => acc + mutant.power, o),
console,log(totalMutantPower);