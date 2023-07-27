import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p>Portafolio de :</p>
<h1>Eduardo Antonio Rodriguez Macassi</h>
<p>Este es un Trabajo para es el para el Curso de Desarrollo Web y Trata de Mostrar de Equipos Musicales de Todo el Mundo</p>
</section>`;
};