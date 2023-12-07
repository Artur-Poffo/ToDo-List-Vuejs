<script setup lang="ts">
  import PageHeader from '@/components/PageHeader.vue';
  import AddTaskInput from '@/components/AddTaskInput.vue';
  import TaskCard from '@/components/TaskCard.vue';
  import { type ITask } from "../interfaces/ITask"
  import { ref } from 'vue';

  const tasks = ref<ITask[]>([])
</script>

<template>
  <main>
    <PageHeader title="To-Do List" bgUrl="https://www.psicologosberrini.com.br/wp-content/uploads/lista-de-tarefas-para-mudar-sua-vida.jpeg" />

    <section id="list-tasks" >
      <header class="task-input" >
        <AddTaskInput />
      </header>

      <main>
        <ul class="tasks-list" v-for="task in tasks" :key="task.id" >
          <li class="list-item" >
            <TaskCard :id="task.id" :isDone="task.isDone" :content="task.content" />
          </li>
        </ul>
      </main>
    </section>
  </main>
</template>

<style scoped >
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