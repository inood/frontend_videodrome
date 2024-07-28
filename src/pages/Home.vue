<template>
  <div id="home" class="main-content">
    <Page paddingless>
      <ContentRow class="flex-col">
        <MovieFeed :channels="channels" />
      </ContentRow>
    </Page>
  </div>
</template>

<script setup lang="ts">
import Page from "../components/layout/Page.vue";
import ContentRow from "../components/ContentRow.vue";
import MovieFeed from "../components/MovieFeed.vue";
import { onMounted, ref } from "vue";

interface Movie {
  id: string;
  title: string;
  thumbnail: string;
  main_title: string;
}

interface Channel {
  id: string;
  name: string;
  movies: Movie[];
}

const channels = ref<Channel[]>([]);

const fetchChannels = async () => {
  try {
    const response = await fetch("http://localhost:8001/channels");
    if (!response.ok) {
      throw new Error("Failed to fetch channels");
    }
    channels.value = await response.json();
    console.log("Fetched channels on Homepage:", channels.value); // Логирование полученных данных
  } catch (error) {
    console.error("Error fetching channels:", error);
  }
};

onMounted(() => {
  fetchChannels();
});
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh; /* Обеспечиваем растяжение на всю высоту */
  margin-top: 64px; /* Отступ сверху на высоту заголовка */
  margin-left: 240px; /* Отступ слева на ширину открытого меню */
  background-color: #282c34; /* Темный фон */
  transition: margin-left 0.3s ease;
}

.drawer-closed #home {
  margin-left: 64px; /* Отступ слева на ширину закрытого меню */
}

.content {
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34; /* Темный фон */
}

@media (max-width: 768px) {
  #home {
    flex-direction: column;
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  header h1 {
    font-size: 18px;
  }
}
</style>
