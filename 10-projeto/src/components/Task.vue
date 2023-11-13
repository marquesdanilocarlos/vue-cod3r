<template>
  <div class="task" :class="stateClass" @click="changeState">
    <span class="close" @click.stop="remove">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
import eventBus from "@/event-bus";

export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending
      }
    }
  },
  methods: {
    remove(e) {
      eventBus.$emit('taskDeleted', e.target.parentNode.id);
    },
    changeState(e) {
      eventBus.$emit('stateChanged', e.target.parentNode.id);
    }
  }
}
</script>

<style scoped>
.task {
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.pending {
  border-left: 12px solid #B73229;
  background: #F44336;
}

.done {
  color: #DDD;
  border-left: 12px solid #0A8F08;
  background: #4CAF50;
  text-decoration: line-through;
}

.pending .close {
  background: #b73229;
}

.done .close {
  background: #0A8F08;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 100%;
  font-size: 0.9rem;
  width: 20px;
  height: 20px;
  text-align: center;
}
</style>