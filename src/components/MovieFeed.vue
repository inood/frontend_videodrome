<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import MovieCard from './MovieCard.vue'
import { defineProps, watch } from 'vue'

interface Movie {
  id: string
  title: string
  thumbnail: string
  main_title: string
}

interface Channel {
  id: string
  name: string
  movies: Movie[]
}

const props = defineProps<{ channels: Channel[] }>()

// Логирование для отладки
watch(() => props.channels, (newVal) => {
  console.log('Feed prop:', newVal)
}, { immediate: true })
</script>

<template>
  <div v-for="channel in props.channels" :key="channel.id" class="channel-container mt-6">
    <h2 class="channel-title text-xl text-white font-bold mb-2">{{ channel.name }}</h2>
    <div class="carousel-wrapper">
      <div class="carousel-content">
        <div v-for="movie in channel.movies" :key="movie.id" class="slide-item">
          <movie-card :title="movie.title" :thumbnail="movie.thumbnail" :main_title="movie.main_title" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.channel-container {
  padding-left: 1rem;
}

.carousel-wrapper {
  overflow-x: auto;
  display: flex;
  align-items: center;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.carousel-wrapper::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}

.carousel-content {
  display: flex;
  flex-wrap: nowrap;
}

.slide-item {
  flex: 0 0 auto;
  margin-right: 1rem;
}

.movie-card {
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.05);
}
</style>
