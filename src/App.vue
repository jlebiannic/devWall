<script lang="ts" setup>
import datas from "@/datas/db";
import Resource from "@/interfaces/resourceInterface";
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
        <!-- <ul>
            <li v-for="resource in resources">{{ resource.title }}</li>
          </ul> -->
        <v-card v-for="resource in resources">
          <!-- <img :src="resource.image" height="250" /> -->
          <v-img :src="resource.image" height="250"></v-img>
          <v-card-title>{{ resource.title }}</v-card-title>
          <v-card-text
            >{{ resource.media }} ajouté le {{ resource.date }}</v-card-text
          >
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
