<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    add() {
      this.contador++;
    },
    sub() {
      this.contador--;
    }
  }
}
</script>

<style scoped>
span {
  border-bottom: 1px solid #CCC;
  height: 30px;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>