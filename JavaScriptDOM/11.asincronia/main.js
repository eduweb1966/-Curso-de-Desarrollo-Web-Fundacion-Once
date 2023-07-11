<<<<<<< HEAD
const list =[];
const createName = (firstName) => {
// esta funcion al final del todo ejecuta el push name, al ser funciones se esperan al terminar
    const NewName = `${firstName} Addams`;
    pushName(newName, list);
};

const pushName =(name, list)=>
=======
const list = [];

const createName = (firstName) => {
  const newName = `${firstName} Addams`;
  //Esta función al final del todo ejecuta pushName, al ser funciones se esperan a terminar
  pushName(newName, list);
};

const pushName = (name, list) => {
  list.push(name);
  console.log(list);
};

createName("Miercoles");
>>>>>>> 8f0400adbda5bac2c804c0bffb593362bc96224e
