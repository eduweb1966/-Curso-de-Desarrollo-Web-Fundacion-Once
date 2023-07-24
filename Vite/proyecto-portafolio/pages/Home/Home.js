import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p>Portafolio de :</p>
<h1>Eduardo Rodriguez Macassi</h1>
<p>Este es un Trabajo para aprobar el curso de Desarrollo Web y Trata de Vender de Equipos Musicales</p>
<a href="mailto:peterparker@gmail.com">Estos son →</a>
</section>`;
};