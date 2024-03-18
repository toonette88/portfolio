<template>
  <header>
    <div class="entete">
      <Entete />
    </div>
  </header>
  <main>
    <div>
      <About />
    </div>
    <div>
      <Projects />
    </div>
    <div>
      <Contact />
    </div>
  </main>
  <footer>
    <Pieddepage />
  </footer>
</template>

<script setup>
import Entete from "@/components/Header.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Pieddepage from "@/components/Footer.vue";
import About from "@/components/About.vue";
</script>
