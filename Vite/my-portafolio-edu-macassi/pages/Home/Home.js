import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
main.innerHTML = `
<section class="home">
<h1>Eduardo Rodriguez Macassi</h1>
<p>Hey, I'm</p>
<p>I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that</p>
<a href="mailto:peterparker@gmail.com">contactar</a>
</section>`;
};