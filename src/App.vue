<script setup lang="ts">

import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen flex-col">

    <header class="w-full">
      <Sidebar />
    </header>
    <main class="flex-1 min-h-0 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
}
</style>