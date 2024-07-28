<script setup lang="ts">
import Header from "./components/Header.vue";
import SideMenu from "./components/layout/SideMenu.vue";
import { ref, provide } from 'vue';

const drawer = ref(false); // Меню скрыто по умолчанию

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

provide('isCollapsed', drawer);
provide('toggleDrawer', toggleDrawer);
</script>

<template>
  <div :class="['app-container', 'flex h-screen', { 'drawer-closed': !drawer }]">
    <SideMenu :drawer="drawer" />
    <div class="flex flex-col flex-1">
      <Header />
      <main class="flex-1 overflow-y-auto bg-dark-background">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  background-color: #282c34; /* Темный фон для всего приложения */
  color: #61dafb; /* Цвет текста */
}

.drawer-closed .main-content {
  margin-left: 64px; /* Отступ слева на ширину закрытого меню */
}

.main-content {
  margin-left: 240px; /* Отступ слева на ширину открытого меню */
}

html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-color: #282c34; /* Темный фон для всего приложения */
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #282c34; /* Темный фон для основного содержимого */
  color: #d3d4d5; /* Цвет текста */
}
.bg-dark-background {
  background-color: #282c34; /* Темный фон для основного содержимого */
}
</style>
