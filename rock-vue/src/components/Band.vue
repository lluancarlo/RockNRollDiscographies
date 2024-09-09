<script setup>
import DiscographyCard from '@/components/DiscographyCard.vue'
import '@/assets/band.css'

defineProps({
    name: {
        type: String,
        default: "Band Name"
    },
    members: {
        type: Array,
        default: ["Member 1", "Member 2"]
    }, 
    discography: {
        type: Array,
        default: [{
            Name: "Album A",
            Year: 2022,
            Image: ""
        },
        {
            Name: "Album B",
            Year: 2022,
            Image: ""
        }]
    },
});
</script>

<template>
  <h1>🎙️ {{ name }}</h1>

  <h3>👯 Members</h3>
  <ul>
    <li v-for="(member, i) in members" :key="i">
        {{ member }}
    </li>
  </ul>

  <h3>💿 Discography</h3>

  <ul class="discography-list">
    <DiscographyCard v-for="(disc, i) in discography" :key="i"
        :id="i"
        :title="disc.Name"
        :subTitle="disc.Year.toString()"
        :image-url="disc.Image"
        :is-favorite="false" />
  </ul>
</template>