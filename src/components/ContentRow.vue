<script setup lang="ts">
</script>

<template>
  <div class="flex mt-6 h-[400px]">
    <slot />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.mt-6 {
  margin-top: 1.5rem;
}
.h-\[400px\] {
  height: 400px;
}
</style>
