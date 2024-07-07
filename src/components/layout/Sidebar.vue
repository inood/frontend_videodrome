<script setup lang="ts">
import {useRoute} from "vue-router";
import { HomeIcon, FilmIcon, VideoCameraIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { HomeIcon as HomeSolidIcon, FilmIcon as FilmSolidIcon, MagnifyingGlassIcon as
      MagnifyingGlassIconSolid, VideoCameraIcon as VideoCameraSolidIcon} from '@heroicons/vue/24/solid'

import { inject } from 'vue';

const isCollapsed = inject('isCollapsed');
const toggleMenu = inject('toggleMenu');


const menu = [
  {
    to: '/menu',
    icon: VideoCameraIcon,
    activeIcon: VideoCameraSolidIcon,
  },
  {
    to: '/',
    icon: HomeIcon,
    activeIcon: HomeSolidIcon,

  },
  {
    to: '/search',
    icon: MagnifyingGlassIcon,
    activeIcon: MagnifyingGlassIconSolid,

  },
  // {
  //   to: '/movies/1',
  //   icon: FilmIcon,
  //   activeIcon: FilmSolidIcon,
  // },
]
const route = useRoute();
</script>

<template>
<nav class="block flex-1 bg-movie-black-200">

  <div class="relative flex flex-row p-4 space-x-3">
    <router-link
      v-for="{ to, icon, activeIcon } in menu"
      :to="to"
      :key="to"
      :class="[route.path === to ? 'bg-movie-black-400 text-white' : 'text-gray-600 hover:bg-movie-black-400', 'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg']"
       @click.prevent="to === '/menu' && toggleMenu()"
    >
      <component :is="route.path === to ? activeIcon : icon" class="h-6 w-6" />
    </router-link>
  </div>
</nav>
</template>

<style scoped>

</style>