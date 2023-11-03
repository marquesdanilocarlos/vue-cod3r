<template>
  <div class="contador">
    <span>{{contador}}</span>
    <br>
    <button @click="add">Add</button>
    <button @click="sub">Sub</button>
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

<style scoped lang="scss">

</style>