<template>
  <h1>Mes projets</h1>
  <section id="projects">
    <div v-for="(project, index) in projects" :key="index" class="container">
      <button @click="openModal(project)" class="project btn">
        <h2>{{ project.title }}</h2>
        <img
          :src="project.pictureImage"
          alt="{{ project.pictureDescription }}"
        />
      </button>
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
  import cahierDesCharges from "@/assets/images/cahierdescharges.png";
  import commentaires from "@/assets/images/Commentaires.png";

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
      creationDate: "12 janvier 2024",
      pictureImage: imageCV,
      pictureDescription: "image d'un curriculum vitae marron et blanc",
      visitLink: "../../../CV/index.html",
      gitHubRepository: "https://github.com/toonette88/Mon-CV",
      technologies: "Html5 et Css3",
    },
    {
      title: "Cahier des charges",
      creationDate: "19 janvier 2024",
      pictureImage: cahierDesCharges,
      pictureDescription:
        "page de garde d'un cahier des charges avec un dessin de chaussettes",
      visitLink: "../../../RedigerUnCahierDesCharges/cahierdescharges.pdf",
      gitHubRepository: "Non déposé sur GitHub",
      technologies: "None",
    },
    {
      title: "Dynamiser un espace commentaires",
      creationDate: "9 février 2024",
      pictureImage: commentaires,
      pictureDescription: "Formulaire pour commentaires",
      visitLink:
        "../../../DynamiserUnEspaceDeCommentaires_DocumentsDevoir/index.html",
      gitHubRepository:
        "https://github.com/toonette88/Dynamiser-un-espace-commentaires",
      technologies: "Html5, Css3 et JavaScript",
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

