<template>
  <div id="app">
    <h1>Tarefas</h1>
    <NewTask @taskAdded="add"></NewTask>
    <TaskGrid :tasks="tasks"/>
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid.vue";
import NewTask from "@/components/NewTask.vue";

export default {
  components: {NewTask, TaskGrid},
  data() {
    return {
      tasks: [
        {name: 'Lavar a louça', pending: false},
        {name: 'Comprar blusa', pending: true},
      ]
    }
  },
  methods: {
    add(task) {
      const checkSameName = t => t.name === task.name;
      const reallyNew = this.tasks.filter(checkSameName).length === 0;

      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        });
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #FFF;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
