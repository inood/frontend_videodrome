<template>
  <aside :class="['navigation-drawer', { 'drawer-closed': !drawer }]">
    <nav>
      <ul>
        <li v-for="{ to, name, icon, activeIcon } in menu" :key="to">
          <router-link
            :to="to"
            :class="[route.path === to ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700', 'flex items-center p-4 rounded-lg']"
          >
            <component :is="route.path === to ? activeIcon : icon" class="h-6 w-6" />
            <span class="title" v-if="drawer">{{ name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { HomeIcon, VideoCameraIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { HomeIcon as HomeSolidIcon, MagnifyingGlassIcon as MagnifyingGlassIconSolid, VideoCameraIcon as VideoCameraSolidIcon } from '@heroicons/vue/24/solid';
import { useRoute } from "vue-router";

const menu = [
  {
    to: '/',
    name: 'Home',
    icon: HomeIcon,
    activeIcon: HomeSolidIcon,
  },
  {
    to: '/search',
    name: 'Search',
    icon: MagnifyingGlassIcon,
    activeIcon: MagnifyingGlassIconSolid,
  },
  {
    to: '/menu',
    name: 'Menu',
    icon: VideoCameraIcon,
    activeIcon: VideoCameraSolidIcon,
  },
];

const props = defineProps({
  drawer: {
    type: Boolean,
    required: true,
  },
});

const route = useRoute();
</script>

<style scoped>
.navigation-drawer {
  height: 100vh;
  width: 240px;
  background-color: #333; /* Темный фон */
  transition: width 0.3s ease;
  overflow: hidden;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 64px; /* Отступ сверху на высоту заголовка */
}

.drawer-closed {
  width: 64px;
}

.navigation-drawer nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation-drawer nav ul li {
  display: flex;
  align-items: center;
}

.navigation-drawer nav ul li .icon {
  margin-right: 16px;
}

.navigation-drawer nav ul li .title {
  margin-left: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 160px; /* 240px (ширина открытого меню) - 64px (ширина иконки и отступа) */
}

.drawer-closed .title {
  display: none;
}
</style>
