import "./ProjectCard.css";
export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.wikipedia}>
   
<a href="https://es.wikipedia.org/wiki/Wikipedia:Portada"><img src="/icons/wikipedia.png" alt="wikipedia Icon"></img></a>
</a>
</div>
</div>
<div class="detail">
<p>${project.description}</p>
</div>
</div>
`;