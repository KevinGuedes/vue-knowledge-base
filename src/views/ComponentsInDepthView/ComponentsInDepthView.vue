<template>
  <h1>Sub Topics</h1>
  <nav>
    <RouterLink to="/components-in-depth/slots">Slots</RouterLink>
    <RouterLink to="/components-in-depth/component-v-model">Component V-Model</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
  padding: 1rem;
}
</style>
