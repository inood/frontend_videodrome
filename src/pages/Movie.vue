<script setup lang="ts">

import Page from "../components/layout/Page.vue";

import {onMounted, ref} from "vue";

import {useRoute} from "vue-router";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer.vue";

const videoInfo = ref<string>('');


const route = useRoute();
const videoName = route.params.movie_title as string;
const video_stream = `http://localhost:8001/proxy/${videoName}/master.m3u8`
const poster_src  = route.params.thumbnail as string;
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


onMounted(async() => {
  await loadMetadata();

})

</script>

<template>
  <page>
    <div class="main-content">
      <div class="content">

          <VideoPlayer :src="video_stream" :poster="poster_src"/>

        <div class="video-info" v-html="videoInfo"></div>
      </div>
    </div>
  </page>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.plyr__video-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-info {
  margin-top: 20px;
  width: 100%;
  color: #d3d4d5;
  max-width: 800px;
  text-align: left;
}

.not-authorized {
  text-align: center;
  margin-top: 50px;
}


@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  header h1 {
    font-size: 18px;
  }
}
</style>