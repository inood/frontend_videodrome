<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

interface Movie {
  title: string
  thumbnail: string
  main_title: string
}
const props = defineProps<Movie>()
const router = useRouter()

const openVideo = () => {
  router.push(`/movies/${props.title}`)
}

console.log('MovieCard props:', props)
</script>

<template>
  <div class="movie-card-container">
    <div class="movie-card" @click="openVideo">
      <div class="movie-poster-wrapper">
        <img
          :src="props.thumbnail"
          alt="movie poster"
          class="movie-poster"
        />
      </div>
    </div>
    <div class="movie-info">
      <h2 class="movie-title">{{ props.main_title }}</h2>
      <div class="movie-rating">
        <StarIcon class="star-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-card-container {
  margin-right: 2rem;
  cursor: pointer;
  width: 256px; /* 16:9 ratio width */
}

.movie-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.movie-poster-wrapper {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (9/16 = 0.5625 or 56.25%) */
  position: relative;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.movie-poster:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.movie-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
}

.movie-title {
  color: white;
  font-size: 1.25rem; /* 20px */
}

.movie-rating {
  display: flex;
  align-items: center;
}

.star-icon {
  color: orange;
  width: 1rem; /* 16px */
}
</style>
