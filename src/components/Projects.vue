<template>
   <section id="projects">
    <h1 class="title"> Mes projets </h1>
    <div class="project-container">
    <div class="project-content" v-for="(project, index) in projects" :key="index"  >
      <div @click="openModal(project)" class="project btn">
        <h2>{{ project.title }}</h2>
        <img
          :src="project.picture"
          alt="{{ project.pictureDescription }}"
        />
      </div>
    </div>
  </div>
    <Modal
      :isOpen="isModalOpened"
      @modal-close="closeModal"
      :project="selectedProject"
    >
    </Modal>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
import imageCV from "@/assets/images/imageCV.png";
import specifications from "@/assets/images/cahierdescharges.png";
import comments from "@/assets/images/Commentaires.png";

  const isModalOpened = ref(false);

  const selectedProject = ref(null);

  const openModal = (project) => {
    isModalOpened.value = true;
    selectedProject.value=project;
  };

const closeModal = () => {
  isModalOpened.value = false;
};

const projects = [
  {
    title: "Curriculum Vitae",
    date: "12 janvier 2024",
    picture: imageCV,
    pictureDescription: "image d'un curriculum vitae marron et blanc",
    //link: "../../../CV/index.html",
    //gitHubRepository: "https://github.com/toonette88/Mon-CV",
    technologies: "Html5 et Css3",
  },
  {
    title: "Cahier des charges",
    date: "19 janvier 2024",
    picture: specifications,
    pictureDescription:
      "page de garde d'un cahier des charges avec un dessin de chaussettes",
    //link: "../../../RedigerUnCahierDesCharges/cahierdescharges.pdf",
    //gitHubRepository: "Non déposé sur GitHub",
    technologies: "None",
  },
  {
    title: "Dynamiser un espace commentaires",
    date: "9 février 2024",
    picture: comments,
    pictureDescription: "Formulaire pour commentaires",
  //  link:
  //     "../../../DynamiserUnEspaceDeCommentaires_DocumentsDevoir/index.html",
  //   gitHubRepository:
  //     "https://github.com/toonette88/Dynamiser-un-espace-commentaires",
    technologies: "Html5, Css3 et JavaScript",
  },
];
</script>

<style scoped>

section {
  display:flex;
  justify-content: start;
  flex-direction: column;
}

section:hover > h1 {
  text-decoration: underline solid;
}

.project-container {
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  height: 400px;
  }


.btn {
  font-family: inherit;
  font-size: 1.2em;
  background-color: transparent;
  border-style: none;
}

  button {
    font-family: inherit;
    font-size: 1.2em;
    background-color: transparent;
    border-style: none;
  }

  img {
    min-width: 200px;
    height: 250px;
  }

  img:hover {
    box-shadow: 14px 12px 9px 4px rgba(97, 93, 93, 0.75);
    -webkit-box-shadow: 14px 12px 9px 4px rgba(97, 93, 93, 0.75);
    -moz-box-shadow: 14px 12px 9px 4px rgba(97, 93, 93, 0.75);
  }
</style>

