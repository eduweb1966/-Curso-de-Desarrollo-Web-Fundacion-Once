import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<h2>
<a href="mailto:erodriguezmacassi@gmail.com"><button class="button">contacto</button></a>
<div> </h2>
${Button("/icons/twitter.png", "Twitter",)}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkeding.png", "LinkedIn")}
${Button("/icons/instagram.png", "Intagram")}
${Button("/icons/facebook.png","Facebook")}
</div>
`;