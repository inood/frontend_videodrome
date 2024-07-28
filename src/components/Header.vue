<template>
  <header class="app-bar">
    <button @click="toggleDrawer" class="nav-icon">
      ☰
    </button>
    <h1 class="app-title">Videodrome</h1>
    <img src="../assets/logo.png" alt="Logo" class="logo" />
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Search..."
        @focus="expandSearchInput"
        @blur="shrinkSearchInput"
        @input="expandSearchInput"
      />
    </div>
    <img src="../assets/profile-icon.png" alt="Profile" class="profile-icon" />
  </header>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

const toggleDrawer = inject('toggleDrawer');
const isExpanded = ref(false);

const expandSearchInput = () => {
  isExpanded.value = true;
};

const shrinkSearchInput = (event) => {
  if (event.target.value.trim() === '') {
    isExpanded.value = false;
  }
};
</script>

<style scoped>
.app-bar {
  display: flex;
  align-items: center;
  background-color: #282c34; /* Темный фон */
  color: #9a0409; /* Светлый текст */
  padding: 0 16px;
  height: 64px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Устанавливаем высокий z-index */
}

.nav-icon {
  background: none;
  border: none;
  color: #f4f5f5;
  font-size: 24px;
  cursor: pointer;
  margin-right: 16px;
}

.app-title {
  margin: 0;
  font-size: 24px;
  margin-right: 16px; /* Отступ справа */
}

.logo {
  height: 40px;
  margin-right: 16px;
}

.search-input::placeholder {
  color: #282c34; /* Цвет текста placeholder */
}


.search-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 500px; /* Узкое поле по умолчанию */
  max-width: 800px;
  height: 50%; /* Высота 60% от высоты header */
  padding: 8px;
  border: none;
  border-radius: 4px;
  transition: width 0.3s ease;
  background: #c4c1c1;
  color: #282c34;
}

.search-input:focus,
.search-input:not(:placeholder-shown) {
  width: 800px; /* Расширенное поле при фокусе или вводе текста */
}

.profile-icon {
  height: 40px;
  margin-left: 16px;
  cursor: pointer;
}
</style>
