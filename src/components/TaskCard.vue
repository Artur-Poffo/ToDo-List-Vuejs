<script setup lang="ts" >
    import { TrashIcon } from "@heroicons/vue/24/solid"
    
    const props = defineProps<{
        id: string
        content: string
        isDone: boolean
    }>()
</script>

<template>
    <article class="container" >
        <div class="content" >
            <input type="checkbox" :checked="props.isDone" class="task-checkbox" >
            <p>{{ props.content }}</p>
        </div>

        <div class="buttons-container" >
            <button class="delete-button" >
                <trash-icon class="delete-icon" />
            </button>
        </div>
    </article>
</template>

<style scoped >
    .container {
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: start;
        justify-content: space-between;
        background-color: #202020;
        border-radius: 5px;
    }

    .content {
        display: flex;
        align-items: center;
        gap: 25px;
        max-width: 600px;
    }

    .task-checkbox {
        width: 50px;
        height: 50px;
        accent-color: red;
    }

    .delete-button {
        padding: 7px;
        border: 1px solid crimson;
        border-radius: 5px;
        background-color: #171717;
        cursor: pointer;
    }

    .delete-icon {
        width: 20px;
        height: 20px;
        color: #FEFEFE;
    }
</style>