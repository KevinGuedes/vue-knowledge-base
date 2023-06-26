<template>
  <section class="content-section">
    <h3>
      <slot name="title"> <h3>Fallback Title</h3> </slot>
    </h3>
    <slot>
      <p>Default Fallback Content</p>
    </slot>
  </section>
</template>
