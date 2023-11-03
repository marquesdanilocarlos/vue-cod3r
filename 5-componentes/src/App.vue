<script>
import Contador from './components/Contador.vue'

export default {
  name: 'App',
  components: {
    Contador
  }
}
</script>

<template>
  <div id="app">
    <Contador v-for="c in 5" :key="c"></Contador>
    <button>Teste</button>
  </div>
</template>
