<template>
  <section id="projects">
      <div  v-for="(project, index) in projects" :key="index" class="container">
      <button v-on:click="toggleModale"  class="projet btn">
        <h2>{{ title }}</h2>
        <img src="pictureImage" alt="pictureDescription">
        <Project :revele="revele" :toggleModale="toggleModale"></Project>
      </button>
  </div>
  </section>
</template>

<script setup>
import Project from "./Modale.vue";

let revele = false;


function toggleModale() {
  revele = !revele
 }



const projects = [
  {
    title: "Curriculum Vitae",
    creationDate: "12 janvier 2024",
    pictureImage: "file:///C:\Users\ameli\OneDrive\Documents\CEF\Devoirs\portfolio\src\assets\images\imageCV.png",
    pictureDescription: "image d'un curriculum vitae maron et blanc",
    visitLink: "file:///C:\Users\ameli\OneDrive\Documents\CEF\Devoirs\CV\index.html",
    gitHubRepository: "https://github.com/toonette88/Mon-CV",
    technologies: "HTML5 et CSS3",
  },
  {
    title: "Cahier des charges",
    creationDate: "19 janvier 2024",
    pictureImage: "file:///C:\Users\ameli\OneDrive\Documents\CEF\Devoirs\portfolio\src\assets\images\cahierdescharges.png",
    pictureDescription: "page de garde d'un cahier des charges avec un dessin de chaussettes",
    visitLink: "file:///c:\Users\ameli\OneDrive\Documents\CEF\Devoirs\RedigerUnCahierDesCharges\cahierdescharges.pdf",
    gitHubRepository: "Non déposé sur GitHub",
    technologies: "Aucun langage de programmation",
  },
  {
    title: "Dynamiser un espace commentaires",
    creationDate: "9 février 2024",
    pictureImage: "file:///C:\Users\ameli\OneDrive\Documents\CEF\Devoirs\portfolio\src\assets\images\Commentaires.png",
    pictureDescription: "Formulaire pour commentaires",
    visitLink: "file:///C:/Users/ameli/OneDrive/Documents/CEF/Devoirs/DynamiserUnEspaceDeCommentaires_DocumentHTMLDevoir/DynamiserUnEspaceDeCommentaires_DocumentsDevoir/index.htmls",
    gitHubRepository: "https://github.com/toonette88/Dynamiser-un-espace-commentaires",
    technologies: "HTML5, CSS3 et JavaScript",
  },
];
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
}

.container{
  width: 300px;
}
</style>
