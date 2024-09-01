<script setup>
import '@/assets/card.css'
import { ref, defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: "Example title"
    },
    subTitle: {
        type: String,
        default: "subtitle test"
    },
    imageUrl: {
        type: String,
        default: ""
    },
    id: {
        type: Number,
        default: 0
    },
    isFavorite: {
        type: Boolean,
        default: false
    }
});
const isFav = ref(props.isFavorite)

const toggleFavorite = () => {
    isFav.value = !isFav.value
}
</script>

<template>
    <li :class="{ card: true, favorite: isFav }"
        :index="id"
        @click="toggleFavorite">
        <img :src="imageUrl" :alt="title">
        <h3>{{ title }}</h3>
        <p>{{ subTitle }}</p>
    </li>
</template>