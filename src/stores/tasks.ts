import type { ITask } from '@/interfaces/ITask'
import { defineStore } from 'pinia'
import { uuid } from 'vue-uuid'

export const useTasksStore = defineStore('tasks', {
  state: (): { tasks: ITask[] } => {
    const savedTasks: ITask[] = JSON.parse(localStorage.getItem('tasks') || '[]')

    return {
      tasks: savedTasks
    }
  },

  actions: {
    addTask(text: string) {
      this.tasks.push({
        id: uuid.v4(),
        content: text,
        isDone: false
      })

      this.saveTasks()
    },

    toggleAsCompleted(taskId: string) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId)
      this.tasks[taskIndex].isDone = !this.tasks[taskIndex].isDone
      
      this.saveTasks()
    },

    removeTask(taskId: string) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId)
      this.tasks.splice(taskIndex, 1)

      this.saveTasks()
    },

    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})

export type TasksStore = ReturnType<typeof useTasksStore>