<template>
  <h1>Sub Topics</h1>
  <nav>
    <RouterLink to="/components-in-depth/slots">Slots</RouterLink>
    <RouterLink to="/components-in-depth/component-v-model">Component v-model</RouterLink>
  </nav>
  <RouterView v-slot="{ Component }">
    <main v-if="Component">
      <component :is="Component"></component>
    </main>
  </RouterView>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
