<template>
  <div>
    <h2>{{ title }}</h2>
    <button type="button" @click="openModal" class="buttonpicture">
      <img src="{{ picture }}" alt="" />
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25"></div>
      </TransitionChild>
      <div>
        <div>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel>
              <DialogTitle as="h3">
                {{ title }}
              </DialogTitle>
              <div>
                <button>
                  <a
                    href="https://www.flaticon.com/fr/icones-gratuites/bouton-de-fermeture"
                    title="bouton de fermeture icônes"
                    >Bouton de fermeture icônes créées par Hogr - Flaticon</a
                  >
                </button>
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
                  <br />
                </p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const isOpen = ref(true);

function setIsOpen(value) {
  isOpen.value = value;
}

defineProps({
  title: String,
  visiteLink: String,
  gitHubRepository: String,
  technologies: String,
  creationDate: Date,
  picture: String,
});
</script>
