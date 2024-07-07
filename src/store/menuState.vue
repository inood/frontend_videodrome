// src/store/menuState.ts
import { ref } from 'vue';

export const isCollapsed = ref(false);

export const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value;
};
