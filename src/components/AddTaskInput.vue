<script setup lang="ts" >
    import { PlusIcon } from "@heroicons/vue/24/solid"
import { ref } from "vue";

    const inputValue = ref("")

    function handleCreateTask(e: Event) {
        console.log(inputValue.value)
        inputValue.value = ""
    }
</script>


<template>
    <div class="container" >
        <input class="task-input" type="text" placeholder="Ex: Limpar a casa..." v-model="inputValue">
        
        <button class="add-button" @click="handleCreateTask" >
            <plus-icon class="search-icon" />
        </button>
    </div>
</template>

<style scoped >
    .container {
        width: 100%;
        padding: 8px;
        background-color: #EEE;
        display: flex;
        align-items: center;
        gap: 20px;
        border-radius: 100px;
        position: relative;
        z-index: 999;
    }

    .task-input {
        width: 100%;
        flex: 1;
        background-color: transparent;
        font-size: 18px;
    }

    .add-button {
        padding: 15px;
        background-color: #202020;
        color: #FFF;
        border-radius: 50%;
        cursor: pointer;
        transition: all ease .3s;
    }

    .add-button:hover {
        opacity: .9;
    }

    .search-icon {
        width: 24px;
        height: 24px;
        color: #EEE;
    }
</style>