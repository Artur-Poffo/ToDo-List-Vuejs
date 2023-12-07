<script setup lang="ts" >
    const props = defineProps<{
        title: string
        bgUrl: string
    }>()
</script>

<template>
    <header class="header" >
        <img class="bg-image" :src="bgUrl" alt="Imagem de fundo">
        <h1 class="title" >{{ title }}</h1>
    </header>
</template>

<style scoped>
    .header {
        width: 100%;
        height: 50vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bg-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 997;
        opacity: .7;
    }

    .title {
        font-size: 30px;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-weight: bold;
        z-index: 998;
    }
</style>