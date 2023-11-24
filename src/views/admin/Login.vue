<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const alertMessage = ref();
const { user, signin } = useAuthStore();
//const { user, signin } = storeToRefs(authStore); => ne fonctionne pas pour sigin car ne fonctionne que pour les ref et les computed
const router = useRouter();

const connexionAction = async () => {
  const token = await signin();
  if (token) {
    console.log(token);
    //alertMessage.value = "Connexion réussie !";
    router.push({ name: "Admin" });
  } else {
    alertMessage.value = "Echec de la connexion";
  }
};
</script>
<template>
  <v-alert width="60%" class="mb-4" v-if="alertMessage" color="error">{{
    alertMessage
  }}</v-alert>
  <v-card width="60%">
    <v-card-title>Ajouter une ressource</v-card-title>

    <v-card-text>
      <v-text-field
        type="email"
        v-model="user.email"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="user.password"
        label="Mot de passe"
        required
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="my-7">
      <v-btn @click="connexionAction" color="primary">Connexion</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
