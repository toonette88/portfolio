<template>
  <h1>Mes projets</h1>
  <section id="projects">
      <div  v-for="(projet, index) in projects" :key="index" class="container">
        <button @click="openModal"  class="projet btn">
        <h2>{{ projet.title }}</h2>
        <img :src="projet.pictureImage" alt="{{ projet.pictureDescription }}">
        <Project  
        :isOpen="isModalOpened" 
        @modal-close="closeModal" 
        v-bind="projet"
        ></Project>
        </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Project from "./Modale.vue";
import imageCV from "@/assets/images/imageCV.png";
import cahierDesCharges from "@/assets/images/cahierdescharges.png";
import commentaires from "@/assets/images/Commentaires.png";

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};

const closeModal = () => {
  isModalOpened.value = false;
}


const projects = [
  {
    title: "Curriculum Vitae" ,
    creationDate: "12 janvier 2024",
    pictureImage: imageCV,
    pictureDescription: "image d'un curriculum vitae maron et blanc",
    visitLink: "../../../CV/index.html",
    gitHubRepository: "https://github.com/toonette88/Mon-CV",
    technologies: "HTML5 et CSS3",
  },
  {
    title: "Cahier des charges",
    creationDate: "19 janvier 2024",
    pictureImage: cahierDesCharges,
    pictureDescription: "page de garde d'un cahier des charges avec un dessin de chaussettes",
    visitLink: "../../../RedigerUnCahierDesCharges/cahierdescharges.pdf",
    gitHubRepository: "Non déposé sur GitHub",
    technologies: "Aucun langage de programmation",
  },
  {
    title: "Dynamiser un espace commentaires",
    creationDate: "9 février 2024",
    pictureImage: commentaires,
    pictureDescription: "Formulaire pour commentaires",
    visitLink: "../../../DynamiserUnEspaceDeCommentaires_DocumentsDevoir/index.html",
    gitHubRepository: "https://github.com/toonette88/Dynamiser-un-espace-commentaires",
    technologies: "HTML5, CSS3 et JavaScript",
  },
];
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;


}

.container {
  height: 400px;
  align-items: end;
}

button {
  font-family: inherit;
  font-size: 1.2em;
  background-color: transparent;
  border-style: none;
}



img{
  min-width: 200px;
  height: 250px;
}

img:hover {
  box-shadow: 14px 12px 9px 4px rgba(97,93,93,0.75);
-webkit-box-shadow: 14px 12px 9px 4px rgba(97,93,93,0.75);
-moz-box-shadow: 14px 12px 9px 4px rgba(97,93,93,0.75);
}
</style>
