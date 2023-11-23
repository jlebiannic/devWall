<script setup lang="ts">
import { useRoute } from "vue-router";
import { resourceService } from "@/service/resourceService";
import defaultImage from "@/assets/default.png";
import frenchFlags from "@/assets/frenchFlag.png";
import Resource from "@/interfaces/resourceInterface";
import { ref } from "vue";

const idResource = useRoute().params.id;

const resourceDetail = ref<Resource>();
resourceService
  .getResource(idResource as string)
  .then((data) => (resourceDetail.value = data));
</script>

<template>
  <v-row v-if="resourceDetail">
    <v-col cols="3">
      <a :href="resourceDetail.url"
        ><v-img :src="resourceDetail.image || defaultImage" height="500"></v-img
      ></a>
    </v-col>
    <v-col cols="6"
      ><h1>{{ resourceDetail.title }}</h1>
      <p>Evaluation: {{ resourceDetail.rating }}</p>
      <v-rating
        hover
        :length="5"
        :size="32"
        :model-value="resourceDetail.rating"
        active-color="primary"
      />
      <p>{{ resourceDetail.description }}</p>
      <v-btn
        :href="resourceDetail.url"
        target="blank"
        class="mt-5"
        color="secondary"
        >Voir la resource</v-btn
      >
    </v-col>
  </v-row>
</template>

<style scoped></style>
