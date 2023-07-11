//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div = document.createElement("div");
div.innerHTML = "Soy el div";
console.log(div);
document.body.appendChild(div);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divWithMultipleP = document.createElement("div");
for(let i =0; i< 6; i ++) {
    const pElement = document.createElement("p");
     pElement.textContent = `Parrafo ${i + 1}`;
     divWithMultipleP.appendChild(pElement);
}


//2.6 Basandote en el siguiente array crea una lista ul > li con
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const  apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement("ul");
apps.forEach((app) => {
    const liElement = document.createElement("li");
    liElement.textContent = app;
    ulElement.appendChild(liElement);

});
document.body.appendChild(ulElement);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me


function myFunction() {
    var element = document.getElementById("fn-remove-me");
    element.classList.remove();
  }


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.

 // Obtén los elementos <div> con la clase "fn-insert-here"
const divs = document.getElementsByClassName("fn-insert-here");

// Crea un nuevo elemento <p>
const p = document.createElement("p");
const texto = document.createTextNode("Voy en medio!");

// Añade el texto al elemento <p>
p.appendChild(texto);

// Inserta el elemento <p> entre los dos divs
divs[0].insertAdjacentElement("afterend", p);


//Recuerda que no solo puedes insertar elementos con .appendChild.
//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase. fn-insert-here 

window.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('.fn-insert-here');
  divs.forEach((div) => {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
  });
});

 