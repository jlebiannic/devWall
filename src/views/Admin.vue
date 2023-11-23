<script setup lang="ts"></script>

<template>
  <h1>Administration</h1>
  <v-btn :to="{ name: 'Management' }" color="secondary">Gestion</v-btn>
  <v-btn :to="{ name: 'Validation' }" class="ml-2" color="secondary"
    >Validation</v-btn
  >

  <div class="mt-8">
    <RouterView />
  </div>
</template>

<style scoped></style>
