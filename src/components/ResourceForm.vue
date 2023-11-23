<script setup lang="ts">
import Resource from "@/interfaces/resourceInterface";
import { resourceService } from "@/service/resourceService";
import { ref } from "vue";

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{
  onClickAnnulerAction: [];
  onClickAjouterAction: [];
}>();

const newResource = ref<Resource>({
  title: "",
  description: "",
  url: "",
  image: "",
  date: "",
  isValid: false,
  isTop: false,
  media: "post",
  lang: "en",
  rating: 3,
});

const alertMessage = ref("");

const ajouterAction = async () => {
  const date = new Date();
  newResource.value.date = date.toLocaleDateString();
  const addedResource = await resourceService.createResource(newResource.value);

  if (addedResource) {
    alertMessage.value = "Ressource ajoutée avec succès";

    newResource.value.title = "";
    newResource.value.url = "";
    newResource.value.description = "";
    newResource.value.image = "";
  }

  //emit("onClickAjouterAction");
};
</script>
<template>
  <v-dialog v-model="props.isOpen">
    <v-card>
      <v-card-title>Ajouter une ressource</v-card-title>

      <v-card-text>
        <v-alert class="mb-4" v-if="alertMessage" color="success">{{
          alertMessage
        }}</v-alert>

        <v-text-field
          v-model="newResource.title"
          label="Titre"
          required
          hide-details
        ></v-text-field>

        <v-text-field
          v-model="newResource.url"
          label="Url"
          required
          hide-details
        ></v-text-field>

        <v-text-field
          label="Image"
          v-model="newResource.image"
          required
          hide-details
        ></v-text-field>

        <v-textarea
          label="Description"
          v-model="newResource.description"
          required
          hide-details
        ></v-textarea>

        <v-select
          v-model="newResource.lang"
          label="Langue"
          :items="[
            { text: 'Français', value: 'fr' },
            { text: 'Anglais', value: 'en' },
          ]"
          item-value="value"
          item-title="text"
        />
        <v-select
          v-model="newResource.media"
          label="Type de média"
          :items="[
            { text: 'Article', value: 'post' },
            { text: 'Livre', value: 'book' },
            { text: 'Vidéo', value: 'video' },
          ]"
          item-value="value"
          item-title="text"
        />
      </v-card-text>

      <v-card-actions class="my-7">
        <v-btn @click="ajouterAction" color="secondary">Ajouter</v-btn>
        <v-btn
          @click="emit('onClickAnnulerAction')"
          class="ml-4"
          color="secondary"
          >Annuler</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
