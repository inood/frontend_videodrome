<script setup lang="ts">
import Page from "../components/layout/Page.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer.vue";

const videoInfo = ref<string>('');

const route = useRoute();
const videoName = route.params.movie_title as string;
const video_stream = `http://localhost:8001/proxy/${videoName}/master.m3u8`;
const poster_src = route.params.thumbnail as string;

const loadMetadata = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/videos/${videoName}/metadata`);
    const metadata = response.data;
    videoInfo.value = `
      <p>${metadata.description}</p>
      <h3>Chapters</h3>
      <ul>${metadata.chapters.map((ch: string) => `<li>${ch}</li>`).join('')}</ul>
    `;
  } catch (error) {
    console.error('Error fetching video details:', error);
  }
};

onMounted(async () => {
  await loadMetadata();
});
</script>

<template>
  <page>
    <div class="main-content">
      <div class="video-section">
        <VideoPlayer :src="video_stream" :poster="poster_src" />
      </div>
      <div class="info-section">
        <div class="video-info" v-html="videoInfo"></div>
        <!-- Добавьте здесь элементы для комментариев и другой информации -->
      </div>
    </div>
  </page>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  margin-top: 64px; /* Отступ сверху на высоту заголовка */
  margin-left: 240px; /* Отступ слева на ширину открытого меню */
  transition: margin-left 0.3s ease;
  padding: 20px; /* Отступ внутри */
}

.drawer-closed .main-content {
  margin-left: 64px; /* Отступ слева на ширину закрытого меню */
}

.video-section {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.info-section {
  width: 100%;
  max-width: 960px;
  margin: 20px auto;
  color: #d3d4d5;
}

.video-info {
  margin-top: 20px;
  text-align: left;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 64px; /* Для мобильных устройств меню будет всегда свернуто */
  }
}

@media (max-width: 480px) {
  header h1 {
    font-size: 18px;
  }
}
</style>
