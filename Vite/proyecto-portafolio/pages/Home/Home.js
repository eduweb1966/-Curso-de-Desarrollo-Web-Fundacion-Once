import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p> </p>
<h1>Eduardo Antonio Rodriguez Macassi</h1>
<p>Este es un Trabajo para el Curso de Desarrollo Web y Trata de Mostrar de Equipos Musicales de Todo el Mundo</p>
</section>`;
};