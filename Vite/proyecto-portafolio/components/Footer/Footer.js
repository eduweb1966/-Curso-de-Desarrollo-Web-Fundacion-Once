import "./Footer.css";
import { Button } from "../Button/Button";
export const Footer = () => `
<h2></h2>
<a href="mailto:erodriguezmacassi@gmail.com">Contacto -></a>
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkeding.png", "LinkedIn")}
</div>
`;