<script setup lang="ts">
import '@/assets/card.css'
import { type Album } from '@/types/album.interface'

const props = defineProps({
  album: {
    type: Object as () => Album
  }
})
// const isFav = ref(props.isFavorite)

// const toggleFavorite = () => {
//     isFav.value = !isFav.value
// }
</script>

<template>
  <li :class="{ card: true }" :index="props.album?.id">
    <img :src="props.album?.image" :alt="props.album?.name" />
    <h3>{{ props.album?.name }}</h3>
    <p>{{ props.album?.year }}</p>
  </li>
</template>
