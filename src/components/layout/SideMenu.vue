<script setup lang="ts">
import { ref, provide } from 'vue';
import { HomeIcon, FilmIcon, UserIcon, Bars3Icon } from '@heroicons/vue/24/solid';

const isCollapsed = ref(false);

const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value;
};

provide('isCollapsed', isCollapsed);
provide('toggleMenu', toggleMenu);
</script>

<template>
  <div :class="{'w-20': isCollapsed, 'w-64': !isCollapsed}" class="h-full bg-gray-800 text-white transition-width duration-300">
    <div class="flex items-center justify-between p-4">
      <h1 v-if="!isCollapsed" class="text-xl font-bold">MyApp</h1>
      <button @click="toggleMenu" class="focus:outline-none">
        <Bars3Icon class="h-6 w-6" />
      </button>
    </div>
    <nav class="mt-6">
      <ul>
        <li class="flex items-center p-2 hover:bg-gray-700">
          <HomeIcon class="h-6 w-6" />
          <span v-if="!isCollapsed" class="ml-3">Home</span>
        </li>
        <li class="flex items-center p-2 hover:bg-gray-700">
          <FilmIcon class="h-6 w-6" />
          <span v-if="!isCollapsed" class="ml-3">Movies</span>
        </li>
        <li class="flex items-center p-2 hover:bg-gray-700">
          <UserIcon class="h-6 w-6" />
          <span v-if="!isCollapsed" class="ml-3">Profile</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.transition-width {
  transition-property: width;
}
</style>
