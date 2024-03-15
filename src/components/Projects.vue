<template>
  <section id="projects">
    <div class="projet">
      <Project v-for="(project, index) in projects" :key="index" />
    </div>
  </section>
</template>

<script setup>
import Project from "./Modal.vue";

const projects = [
  {
    title: "Curriculum Vitae",
    creationDate: "12 janvier 2024",
    pictureImage: "imageCV.png",
    pictureDescription: "imaged'un curriculum vitae maron et blanc",
    visitLink: "file:///C:\Users\ameli\OneDrive\Documents\CEF\Devoirs\CV\index.html",
    gitHubRepository: "https://github.com/toonette88/Mon-CV",
    technologies: "HTML5 et CSS3",
  },
  {
    title: "Cahier des charges",
    creationDate: "19 janvier 2024",
    pictureImage: "cahierdescharges.png",
    pictureDescription: "page de garde d'un cahier des charges avec un dessin de chaussettes",
    visitLink: "file:///c:\Users\ameli\OneDrive\Documents\CEF\Devoirs\RedigerUnCahierDesCharges\cahierdescharges.pdf",
    gitHubRepository: "Non déposé sur GitHub",
    technologies: "Aucun langage de programmation",
  },
  {
    title: "Dynamiser un espace commentaires",
    creationDate: "9 février 2024",
    pictureImage: "Commentaires.png",
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
</style>
