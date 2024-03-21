<template>
  <div id="page404" class="page404">
    <p>Il semblerait qu'il y ai un petit soucis ...</p>
    <figure>
      <img
        src="../assets/images/erreur404.png"
        alt="image marrante d'une fille au cheveux rouge disant oups et montrant un 404 "
      />
    </figure>
  </div>
</template>

<style scoped>
.page404 {
  display: flex;
  background-color: white;
  background-size: contain;
  padding: 4%;
  border-radius: 10%;
  width: 80vw;
}

p {
  font-size: 3em;
  font-weight: 500;
}
  figure {
  align-self: end;
  width: 50%;
  }
</style>
