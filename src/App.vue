<script lang="ts" setup>
import datas from "@/datas/db";
import Resource from "@/interfaces/resourceInterface";
import ResourceItem from "./components/ResourceItem.vue";
const resources: Resource[] = datas;
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
        <v-row>
          <!-- cols="12" est la largeur de col par défaut donc tout ce qui n'est pas md et lg car ils sont spécifiés -->
          <v-col cols="12" md="4" lg="3" v-for="resource in resources">
            <ResourceItem :resourceParam="resource"></ResourceItem>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
