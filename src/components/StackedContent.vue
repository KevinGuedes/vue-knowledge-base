<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;
}
</style>
