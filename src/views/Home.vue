<template>
  <div class="home" id="home">
    <header>
      <div>
        <Entete />
      </div>
    </header>
    <main>
      <div class="home-main-content">
        <div>
          <About />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Contact/>
        </div>
      </div>
      <aside>
        <button>
          <a href="#home" id="up-button">
            <img
              src="../assets/images/fleche_haut.png"
              alt="flêche pointant vers le haut"
            />
          </a>
        </button>
      </aside>
    </main>
    <footer>
      <Pieddepage />
    </footer>
  </div>
</template>

<script setup>
  import Entete from "@/components/Header.vue";
  import Projects from "@/components/Projects.vue";
  import Contact from "@/components/Contact.vue";
  import Pieddepage from "@/components/Footer.vue";
  import About from "@/components/About.vue";
</script>

<style scoped>
  main{
    display: flex;
    flex-direction: row;
    padding: 10px;
  }

  aside{
    display: flex;
    width: 20 px;
  }

  button {
    background: transparent;
    border-style: none;
    position: fixed;
    bottom: 50px;
    right :50px;
  }

</style>