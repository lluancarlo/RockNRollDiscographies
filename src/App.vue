<script setup>
import Band from '@/components/Band.vue'
import json from './json/data.json'
</script>

<template>
  <div class="bar">
    <h1>Rock n' Roll Discographies 🤘🎸</h1>
  </div>
  
  <Band v-for="(band, i) in json.bands" :key="i"
    :name="band.Name"
    :members="band.Members"
    :discography="band.Discography"
    />

</template>