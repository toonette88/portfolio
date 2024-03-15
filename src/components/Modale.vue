<template>
<div class="bloc-modale" v-if="revele">
    <div v-on:click="toggleModale" class="overlay"></div>

    <div class="modale" >
            <button v-on:click="toggleModale" class="btn-modale">
               <img src="../assets/images/bouton-fermer.png" alt="bouton de fermeture">
              </button>
            <div class="content-modale" >
                <h2>{{ title }}</h2>
                <p>
                  Date de création : {{ creationDate }} <br />
                  Technologies utilisées: {{ technologies }}<br />
                  <a href="{{visiteLink}}" target="_blank"
                    >Lien vers la création</a
                  >
                  <br />
                  <a href="{{ gitHubRepository }}" target="_blank"
                    >Lien du Repository</a
                  >
                </p>
            </div>


    </div>

</div>
</template>

<script setup>
import { ref } from "vue";

const revele = ref('')

defineProps({
  title: String,
  visiteLink: String,
  gitHubRepository: String,
  technologies: String,
  creationDate: String,
  pictureImage: String,
  pictureDescription: String,
});



</script>

<style scoped>
    .bloc-modale{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        display:flex ;
        justify-content: center;
        align-items: center;
    }

    .overlay {
         background-color: rgba(0, 0, 0, 0.188);
         position: fixed;
         top:0;
        bottom:0;
        left:0;
        right:0;
    }

    .modale {
        background: #f1f1f1;
        color: #333;
        padding:50px;
        position: fixed;
        top :30%;  
    }

    figure{
      width: 1px;
    }
    .btn-modal {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    
    </style>