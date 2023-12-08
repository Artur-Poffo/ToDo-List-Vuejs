<script setup lang="ts">
import AddTaskInput from '@/components/AddTaskInput.vue';
import PageHeader from '@/components/PageHeader.vue';
import TaskCard from '@/components/TaskCard.vue';
import { useTasksStore } from '@/stores/tasks';

const tasksStore = useTasksStore()
</script>

<template>
  <main>
    <PageHeader title="To-Do List"
      bgUrl="https://www.psicologosberrini.com.br/wp-content/uploads/lista-de-tarefas-para-mudar-sua-vida.jpeg" />

    <section id="list-tasks">
      <header class="task-input">
        <AddTaskInput :tasksStore="tasksStore" />
      </header>

      <main class="tasks-container">
        <ul class="tasks-list">
          <li class="list-item" v-for="task in tasksStore.tasks" :key="task.id">
            <TaskCard :id="task.id" :isDone="task.isDone" :content="task.content" :tasksStore="tasksStore" />
          </li>
        </ul>
      </main>
    </section>
  </main>
</template>

<style scoped>
#list-tasks {
  padding: 0 10px 20px 10px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
}

.task-input {
  max-width: 500px;
  width: 100%;
  margin-top: -40px;
}

.tasks-container {
  width: 100%;
}

.tasks-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.list-item {
  width: 100%;
}
</style>
