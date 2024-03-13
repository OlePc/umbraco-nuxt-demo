<script setup lang="ts">
const contentStore = useContentStore();

if (!contentStore.currentPage) {
  throw createError({ statusCode: 404 });
}
</script>

<template>
  <div>{{ contentStore.currentPage }}</div>
</template>
