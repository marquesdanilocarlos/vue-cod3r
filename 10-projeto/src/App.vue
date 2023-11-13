<template>
  <div id="app">
    <h1>Tarefas</h1>
    <Progress :progress="progress"></Progress>
    <NewTask @taskAdded="add"></NewTask>
    <TaskGrid :tasks="tasks"/>
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid.vue";
import NewTask from "@/components/NewTask.vue";
import Progress from "@/components/Progress.vue";
import EventBus from "@/event-bus";

export default {
  components: {Progress, NewTask, TaskGrid},
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    EventBus.$on('taskDeleted', this.remove);
    EventBus.$on('stateChanged', this.changeState);

    this.loadTasks();

  },
  computed: {
    progress() {
      const totalTasks = this.tasks.length;
      const doneTasks = this.tasks.filter(t => !t.pending).length;
      return Math.round((doneTasks / totalTasks) * 100 || 0);
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
    },
    remove(taskId) {
      const task = this.tasks[taskId];
      if (task) {
        this.tasks.splice(taskId, 1);
      }
    },
    changeState(taskId) {
      const task = this.tasks[taskId];
      if (task) {
        this.tasks[taskId].pending = !task.pending;
      }
    },
    loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks'));

      if (Array.isArray(tasks)) {
        this.tasks = tasks || [];
      }
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
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
