<script setup lang="ts">
import Resource from "@/interfaces/resourceInterface";
import defaultImage from "@/assets/default.png";
import frenchFlags from "@/assets/frenchFlag.png";
import { computed, watch } from "vue";

const { resourceParam } = defineProps<{ resourceParam: Resource }>();

const dateInFrench = computed(() => {
  const dateObj = new Date(resourceParam.date);
  return dateObj.toLocaleDateString();
});

const media = computed(() => {
  return resourceParam.media === "book"
    ? "Livre"
    : resourceParam.media === "post"
    ? "Article"
    : "Vidéo";
});

const ajouteAvecAccord = computed(() => {
  return resourceParam.media === "video" ? "ajoutée" : "ajouté";
});

const sayHelloAction = () => {
  alert("Hello !");
};
</script>

<template>
  <v-card
    class="resource"
    :class="resourceParam.isTop ? 'isTop' : ''"
    min-height="200"
  >
    <!-- <img :src="resource.image" height="250" /> -->
    <v-img :src="resourceParam.image || defaultImage" height="250"></v-img>
    <v-card-title>{{ resourceParam.title }}</v-card-title>
    <v-card-text>
      <p v-if="resourceParam.lang === 'fr'">
        <v-img :src="frenchFlags" height="20"></v-img>
      </p>
      {{ media }} {{ ajouteAvecAccord }} le {{ dateInFrench }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="secondary" @click="sayHelloAction">test click</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.resource {
  border: 1px solid;
}

.isTop {
  background-color: beige;
}
</style>
