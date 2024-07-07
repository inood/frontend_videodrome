<script setup lang="ts">
defineProps<{
  title?: string
}>();
</script>

<template>
<section class="bg-movie-black flex h-full min-w-0 flex-1 flex-col overflow-y-auto">

  <div>
    <slot class="mx-4"/>
  </div>
</section>
</template>

<style scoped>

</style>