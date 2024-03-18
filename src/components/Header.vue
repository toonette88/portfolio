<template>
  <div class="header">
    <Menu as="div" class="menu">
      <div>
        <MenuButton class="menu-label">
          <img
            src="../assets/images/home.svg"
            alt="représentation d'une maison"
          >
          Accueil
          <img 
            src="../assets/images/down-arrow.png" 
            alt="chevron descendant"
            class="chevron"
            >
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems>
          <div class="menu-items">
            <MenuItem v-slot="{ active }">
              <button class="menu-list">
                <a href="#about">Qui suis-je ?</a>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button class="menu-list">
                <a href="#projects">Mes derniers projets</a>
            </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button class="menu-list">
                <a href="#contact">Contact</a>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
    <Menu as="div" class="menu">
      <div>
        <MenuButton class="menu-label">
          <img
            src="../assets/images/TechTideIntegrator.svg"
            alt="logo bleu avec une intégral de TTIdt"
          >
          Projets professionnels
          <img 
            src="../assets/images/down-arrow.png" 
            alt="chevron descendant"
            class="chevron"
          >
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems>
          <div class="menu-items">
            <MenuItem v-slot="{ active }">
              <button class="menu-list">
                <a href="#page404">Custom by GB</a>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button class="menu-list">
                <a href="#page404">Asgdb</a>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button class="menu-list">
                <a href="#page404">Priscilla Voyages</a>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
    <Menu as="div" class="menu">
      <div>
        <MenuButton class="menu-label">
          <img
            src="../assets/images/Design.png"
            alt="logo rond bleu avec le texte my"
          >
          Projets personnels
          <img 
            src="../assets/images/down-arrow.png" 
            alt="chevron descendant"
            class="chevron"
          >
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems>
          <div class="menu-items">
            <MenuItem v-slot="{ active }">
              <button class="menu-list">
                <a href="#page404">A venir</a>
            </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  flex-direction: row;
  justify-content: end;
  height: 150px;
  margin-right: 10px;
  column-gap: 50px;
}

.menu-label{
  display: flex;
  width: 100%;
  align-items: center;
  border-style:none ;
  background-color:transparent;
  font-family: inherit;
  font-size: 2em;
  font-weight: 500;  
}

.menu-items{
  position: fixed;
}

.chevron{
  width:15px;
  padding-top: 25px;
}

.menu-list {
  display: flex;
  flex-direction: column;
  border-style: none;
  margin-left: 20px;
  background-color: transparent;
  font-family: inherit;
  font-size: 1.5em;
}

a{
  text-decoration: none;
  color: black;
}

</style>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
