<script setup lang="ts">

import Page from "../components/layout/Page.vue";
import ContentRow from "../components/ContentRow.vue";
import MovieFeed from "../components/MovieFeed.vue";
import {onMounted, ref} from "vue";

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

const channels = ref<Channel[]>([])

const fetchChannels = async () => {
  try {
    const response = await fetch('http://localhost:8001/channels')
    if (!response.ok) {
      throw new Error('Failed to fetch channels')
    }
    channels.value = await response.json()
    console.log('Fetched channels on Homepage:', channels.value) // Логирование полученных данных
  } catch (error) {
    console.error('Error fetching channels:', error)
  }
}

onMounted(() => {
  fetchChannels()
})

</script>

<template>
  <page paddingless>
   <content-row class="flex-col">
      <movie-feed :channels="channels" />
    </content-row>
  </page>
</template>

<style scoped>

</style>