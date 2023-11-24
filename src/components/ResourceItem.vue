<script setup lang="ts">
import Resource from "@/interfaces/resourceInterface";
import defaultImage from "@/assets/default.png";
import frenchFlags from "@/assets/frenchFlag.png";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

const { resourceParam } = defineProps<{
  resourceParam: Resource;
  modeAjout?: boolean;
  modeSuppression?: boolean;
}>();

const router = useRouter();

const emit = defineEmits<{
  onClickAjouterAction: [resource: Resource];
  onClickSupprimerAction: [resource: Resource];
}>();

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

const onClickAjouterAction = (resource: Resource) => {
  emit("onClickAjouterAction", resource);
};

const onClickSupprimerAction = (resource: Resource) => {
  //console.log("onClickSupprimerAction:", resource);
  emit("onClickSupprimerAction", resource);
};

const onClickItemAction = () => {
  router.push({ name: "ResourceDetail", params: { id: resourceParam.id } });
};
</script>

<template>
  <v-card
    class="resource"
    :class="resourceParam.isTop ? 'isTop' : ''"
    min-height="450"
  >
    <!-- <img :src="resource.image" height="250" /> -->
    <a :href="resourceParam.url"
      ><v-img :src="resourceParam.image || defaultImage" height="250"></v-img
    ></a>
    <v-card-title>{{ resourceParam.title }}</v-card-title>
    <v-card-text>
      <p v-if="resourceParam.lang === 'fr'">
        <v-img :src="frenchFlags" height="20"></v-img>
      </p>
      {{ media }} {{ ajouteAvecAccord }} le {{ dateInFrench }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="modeAjout"
        color="secondary"
        @click="onClickAjouterAction(resourceParam)"
        >+ Liste</v-btn
      >
      <v-btn
        v-if="modeSuppression"
        color="error"
        @click="onClickSupprimerAction(resourceParam)"
        >- Supprimer</v-btn
      >
      <v-btn color="secondary" @click="onClickItemAction">Détails</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.resource {
  /* border: 1px solid; */
}

.isTop {
  background-color: beige;
}
</style>
