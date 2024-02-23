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
import Entete from '@/components/header.vue';
import Projects from '@/components/projects.vue';
import Contact from '@/components/contact.vue';
import Pieddepage from '@/components/footer.vue';
import About from '@/components/about.vue';
</script>