<script lang="ts" setup>
import datas from "@/datas/db";
import Resource from "@/interfaces/resourceInterface";
import defaultImage from "@/assets/default.png";
import frenchFlags from "@/assets/frenchFlag.png";
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
            <v-card class="resource" :class="resource.isTop ? 'isTop' : ''">
              <!-- <img :src="resource.image" height="250" /> -->
              <v-img :src="resource.image || defaultImage" height="250"></v-img>
              <v-card-title>{{ resource.title }}</v-card-title>
              <v-card-text>
                <p v-if="resource.lang === 'fr'">
                  <v-img :src="frenchFlags" height="20"></v-img>
                </p>
                {{ resource.media }} ajouté le {{ resource.date }}</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.resource {
  border: 1px solid;
}

.isTop {
  background-color: beige !important;
}
</style>
