<script setup lang="ts">
import '@/assets/band.css'
import { type Band } from '@/types/band.interface'
import AlbumCard from './AlbumCard.vue'

const props = defineProps({
  band: {
    type: Object as () => Band
  }
})
</script>

<template>
  <h1>🎙️ {{ props.band?.name }}</h1>

  <h3>👯 Members</h3>
  <ul>
    <li v-for="(member, i) in props.band?.members" :key="i">
      {{ member }}
    </li>
  </ul>

  <h3>💿 Discography</h3>
  <ul class="discography-list">
    <AlbumCard v-for="(album, i) in props.band?.discography" :key="i" :album="album" />
  </ul>
</template>
