<template>
  <header>
    <h1>Sub Topics</h1>
    <RouterLink to="/">
      <icon-mdi-keyboard-backspace />
      Back
    </RouterLink>
  </header>
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

<style scoped lang="scss">
header {
  a {
    text-decoration: none;
    color: black;
    border: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background: transparent;

    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: grey;
    }
  }
}
</style>
