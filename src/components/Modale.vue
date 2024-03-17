<template>
<div class="bloc-modale" v-if="isOpen">
    <div @click.stop="emit('modal-close')" class="overlay"></div>

    <div class="modale" >
            <button @click.stop="emit('modal-close')" @click="openModal(projet)"  class="btn-modale">
               <img src="../assets/images/bouton-fermer.png" alt="bouton de fermeture">
              </button>
            <div class="content-modale" >
              <p>
              <h2>{{ title }}</h2>
              
                  Date de création : {{ creationDate }},<br>
                  Technologies utilisées: {{ technologies }} <br>
                  <a href="{{visiteLink}}" target="_blank"
                    >Lien vers la création</a  
                  > <br>
                  <a href="{{ gitHubRepository }}" target="_blank"
                    >Lien du Repository</a
                  >
                </p>
            </div>

    </div>

</div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";


const props = defineProps({
  isOpen: Boolean,
  projetIndex: Object,
  openModal: Function,
  title: String,
  creationDate: String,
  technologies: String,
  visiteLink: String,
  gitHUbRepository: String,

  });

const emit = defineEmits(["modal-close"]);


</script>

<style scoped>
    .bloc-modale{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        display:flex ;
        flex-direction: column;
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
        width: 300px;
    }

  
    .btn-modal {
      position: absolute;
      align-self: flex-end;
      top: 10px;
      right: 10px;
    }
    
    </style>