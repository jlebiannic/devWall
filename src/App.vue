<script lang="ts" setup>
import { ref } from "vue";
import ResourceForm from "./components/ResourceForm.vue";
import { useRouter } from "vue-router";

import { useResourceStore } from "@/stores/resourceStore";
import { useAuthStore } from "./stores/authStore";

const isResourceFormOpen = ref(false);

const rechargerVue = () => {
  //router.go(0);
  isResourceFormOpen.value = false;
};

const resourceStore = useResourceStore();
resourceStore.loadResources();

const authStore = useAuthStore();
const router = useRouter();

const disconnectAction = () => {
  authStore.disconnect();
  router.push({ name: "Home" });
};
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>
        <router-link :to="{ name: 'Home' }" class="devWall"
          >DevWall</router-link
        >
      </v-app-bar-title>
      <v-btn :to="{ name: 'About' }">About</v-btn>
      <v-btn :to="{ name: 'Admin' }">Administration</v-btn>
      <!-- <v-btn :to="{ name: 'ResourceForm' }" color="secondary"
        ><v-icon icon="mdi-plus-circle"></v-icon>Ajouter</v-btn -->
      <v-btn @click="isResourceFormOpen = true" color="secondary"
        ><v-icon icon="mdi-plus-circle"></v-icon>Ajouter</v-btn
      >
      <v-btn @click="disconnectAction" color="secondary"
        ><v-icon>mdi-door-open</v-icon>Déconnexion</v-btn
      >
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView></RouterView>
      </v-container>
    </v-main>
  </v-app>
  <ResourceForm
    :isOpen="isResourceFormOpen"
    @onClickAnnulerAction="rechargerVue"
    @onClickAjouterAction="rechargerVue"
  ></ResourceForm>
</template>

<style scoped>
.devWall {
  color: white;
  text-decoration: none;
  font-size: 2rem;
}
</style>
