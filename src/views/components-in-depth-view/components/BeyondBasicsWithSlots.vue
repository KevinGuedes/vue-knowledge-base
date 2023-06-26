<template>
  <h2>Beyond Basics With Slots</h2>

  <StackedContent>
    <ContentSection />
    <ContentSection />
    <ContentSection />
    <ContentSection />
    <ContentSection />
    <ContentSection />
    <ContentSection />

    <ContentSection>
      <template #title>
        <h3>Named Slots & Fallback Content</h3>
      </template>
      <p>Just check the implementation of this green-delimited area</p>
    </ContentSection>

    <ContentSection>
      <template #title>
        <h3>Dynamic Slot Names</h3>
      </template>
    </ContentSection>

    <ContentSection>
      <template #title>
        <h3>Accessing Props Of Children Slots</h3>
      </template>
    </ContentSection>
  </StackedContent>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
