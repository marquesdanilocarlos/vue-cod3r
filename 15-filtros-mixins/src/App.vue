<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <p>{{ cpf | cpf | inverter }}</p>
    <input type="text" :value="cpf | cpf | inverter">
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: '03321844125'
    }
  },
  filters: {
    cpf(cpf) {
      const arr = cpf.split('');
      arr.splice(3, 0, '.');
      arr.splice(7, 0, '.');
      arr.splice(11, 0, '-');
      return arr.join('');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
