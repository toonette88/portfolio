<template>
  <h1 class="title">Contact</h1>
  <form ref="form" @submit.prevent="sendEmail">
    <div class="name">
      <div class="form_items name">
        <label for="last_name">Nom :</label>
        <input
          type="text"
          v-model="last_name"
          name="last_name"
          id="last_name"
        />
      </div>
      <div class="form_items name">
        <label for="first_name">Prénom : </label>
        <input
          type="text"
          vmodel="fisrt_name"
          name="first_name"
          id="first_name"
        />
      </div>
    </div>
    <div class="form_items">
      <label for="object">Objet : </label>
      <input type="text" v-model="object" name="object" id="object" />
    </div>
    <div class="form_items">
      <label for="message" id="message_title">Message : </label>
      <textarea v-model="message" name="message" id="message"></textarea>
    </div>
    <input type="submit" value="Envoyer" id="submit_button" />
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 600px;
  margin-bottom: 10px;
}

.name {
  display: flex;
  flex-direction: row;
}

.form_items {
  display: flex;
  font-size: 2em;
  padding: 5px;
  margin: 5px;
  align-items: center;
}

#submit_button {
  width: 150px;
  align-self: center;
}

input {
  margin-left: 10px;
  width: 150px;
  background-color: cadetblue;
  color: aliceblue;
}

label {
  margin-left: 45px;
}

#message_title {
  margin-left: 0px;
}

textarea {
  width: 70%;
  min-height: 100px;
  margin-left: 10px;
  background-color: cadetblue;
  color: aliceblue;
}
</style>

<script setup>
function sendEmail() {
  if (!last_name.value || !first_name.value | !object.value || !message.value) {
    alert("Tous les champs doivent être complétés");
  } else {
    last_name.value = null;
    first_name.value = null;
    object.value = null;
    message.value = null;
    alert("Votre messagea été envoyé");
  }
}
</script>
