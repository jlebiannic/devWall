<script lang="ts" setup>
import datas from "@/datas/db";
import Resource from "@/interfaces/resourceInterface";
import ResourceItem from "@/components/ResourceItem.vue";
import defaultImage from "@/assets/default.png";
import { reactive } from "vue";
import { ref } from "vue";
const resources: Resource[] = datas;

//const listeDeLecture: Resource[] = reactive([]);
const listeDeLecture = ref<Resource[]>([]);

const ajouterALaListeDeLecture = (resource: Resource) => {
  if (!listeDeLecture.value.includes(resource)) {
    listeDeLecture.value.push(resource);
  }
};

const supprimerDeLaListeDeLecture = (resource: Resource) => {
  // const index = listeDeLecture.value.findIndex((r) => r.id === resource.id);
  // listeDeLecture.value.splice(index, 1);

  listeDeLecture.value = listeDeLecture.value.filter(
    (res) => res.id !== resource.id
  );
};
</script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>DevWall</v-app-bar-title>
      <v-btn>Menu1</v-btn>
      <v-btn>Menu2</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card
          title="Liste de lecture"
          class="my-7"
          v-if="listeDeLecture.length > 0"
        >
          <v-row>
            <v-col cols="12" md="4" lg="3" v-for="resource in listeDeLecture">
              <ResourceItem
                :resourceParam="resource"
                @onClickSupprimerAction="supprimerDeLaListeDeLecture($event)"
                :modeSuppression="true"
              ></ResourceItem>
            </v-col>
          </v-row>
        </v-card>
        <v-row>
          <!-- cols="12" est la largeur de col par défaut donc tout ce qui n'est pas md et lg car ils sont spécifiés -->
          <v-col cols="12" md="4" lg="3" v-for="resource in resources">
            <ResourceItem
              :resourceParam="resource"
              @onClickAjouterAction="ajouterALaListeDeLecture($event)"
              :modeAjout="true"
            ></ResourceItem>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
