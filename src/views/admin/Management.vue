<script setup lang="ts">
import Resource from "@/interfaces/resourceInterface";
import { useResourceStore } from "@/stores/resourceStore";
import { storeToRefs } from "pinia";

const resourceStore = useResourceStore();
const { validResources: resources } = storeToRefs(resourceStore);
const supprimerAction = (resource: Resource) => {
  resource.id && resourceStore.removeResource(resource.id);
};
</script>
<template>
  <v-card>
    <v-card-title>Gestion</v-card-title>
    <v-card-text>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Titre</th>
            <th class="text-left">date</th>
            <th class="text-left">Opérations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="resource in resources" :key="resource.id">
            <td>{{ resource.title }}</td>
            <td>{{ new Date(resource.date).toLocaleDateString() }}</td>
            <td>
              <v-btn @click="supprimerAction(resource)" color="warning"
                >Supprimer</v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
