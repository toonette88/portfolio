<template>
     <section class="about" id="about">
      <h1 class="title">Qui suis-je ?</h1>
      <div class="flex-container">
      <div class="img">
      <figure>
        <a href="/page404" target="_blank">
          <img
            src="../assets/images/profil.png"
            alt="Photo d'une femme aux cheveux attaché portant des lunettes"
          />
        </a>
      </figure>
    </div>
    <div class="about_text">
      <p>
        Je m'appelle Amélie Pasqualini, j'ai 35 ans et je suis une femme mariée
        avec deux merveilleux enfants. Au cours des dix dernières années, j'ai
        consacré mon temps et mon énergie à une carrière enrichissante en tant
        que professeure de mathématiques, principalement au collège. Passionnée
        par les chiffres autant que par l'éducation, j'ai trouvé une véritable
        satisfaction dans le partage de mes connaissances avec les jeunes
        esprits en développement.
      </p>
      <p>
        En dehors de ma vie professionnelle, je trouve l'équilibre en explorant
        mes diverses passions. La lecture me transporte vers des mondes
        imaginaires, le crochet me permet de créer de magnifiques pièces à la
        fois utiles et esthétiques, tandis que le patinage artistique me donne
        l'occasion de m'exprimer à travers la grâce et la beauté du mouvement.
      </p>
      <p>
        En tant que présidente d'une association de parents d'élèves dans une
        école privée, je m'engage activement dans la communauté éducative,
        œuvrant pour le bien-être et le succès de tous les enfants. Cette
        responsabilité me permet de jouer un rôle actif dans la création d'un
        environnement scolaire favorable à l'épanouissement de chaque élève. Je
        suis une personne déterminée, passionnée et dévouée, toujours prête à
        relever de nouveaux défis et à apporter une contribution positive, que
        ce soit dans ma vie professionnelle ou personnelle.
      </p>
    </div>
  </div>
  </section>
</template>

<script setup></script>

<style scoped>

.flex-container{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about {
    
    font-size: 1.2em;
}

section:hover > h1 {
  text-decoration: underline solid;
}

figure {
    display: flex;
    align-items: center;
    width: 200px;
    height: 200px;
    padding-right :2em;
   
}

figure img {
  width: 100%;
  height: 100%;
  border-radius: 15%;
}

p {
  text-indent: 50px;
}
</style>
