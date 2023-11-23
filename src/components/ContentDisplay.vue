<template>
  <div class="description">
    <h3><slot name="title" /></h3>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.description {
  margin-top: 4px;
  margin-bottom: 4px;
  border: 2px solid grey;
  padding: 1em;
}
</style>
