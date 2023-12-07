<script setup lang="ts" >
import { useTasksStore } from "@/stores/tasks";
import { TrashIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
    id: string
    content: string
    isDone: boolean
}>()

const tasksStore = useTasksStore()
</script>

<template>
    <article class="container">
        <div class="content">
            <input type="checkbox" :checked="props.isDone" class="task-checkbox" @click="tasksStore.toggleAsCompleted(id)">
            <p>{{ props.content }}</p>
        </div>

        <div class="buttons-container">
            <button class="delete-button" @click="tasksStore.removeTask(id)">
                <trash-icon class="delete-icon" />
            </button>
        </div>
    </article>
</template>

<style scoped >
.container {
    width: 100%;
    min-height: 100px;
    padding: 20px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    background-color: #202020;
    border-radius: 5px;
}

.content {
    max-width: 600px;
    display: flex;
    align-items: center;
    gap: 25px;
}

.task-checkbox {
    width: 20px;
    height: 20px;
    accent-color: red;
    cursor: pointer;
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