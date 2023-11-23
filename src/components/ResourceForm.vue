<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{
  onClickAnnulerAction: [];
}>();
</script>
<template>
  <v-dialog v-model="props.isOpen">
    <v-card>
      <v-card-title>Ajouter une ressource</v-card-title>

      <v-card-text> Formulaire</v-card-text>

      <v-card-actions class="my-7">
        <v-btn>Ajouter</v-btn>
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
