<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { HTTP } from './http-common'
import type { Band } from './types/band.interface'
import BandGroup from './components/BandGroup.vue'

const bands = ref<Band[]>([])
const loadBands = async () => {
  try {
    const response = await HTTP.get('/bands')
    bands.value = response.data as Band[]
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => loadBands())
</script>

<template>
  <div class="bar">
    <h1>Rock n' Roll Discographies 🤘🎸</h1>
  </div>

  <BandGroup v-for="(band, i) in bands" :key="i" :band="band" />
</template>
