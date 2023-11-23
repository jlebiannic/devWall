<script lang="ts" setup></script>

<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>
        <router-link :to="{ name: 'Home' }" class="devWall"
          >DevWall</router-link
        >
      </v-app-bar-title>
      <v-btn :to="{ name: 'About' }">About</v-btn>
      <v-btn>Menu2</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView></RouterView>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.devWall {
  color: white;
}
</style>
