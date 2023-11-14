<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ frase | virgula }}</p>


    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o
      valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ frase | contaPalavra }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ virgula }}</p>
    <p>{{ contaPalavra }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import computedMixin from "@/computedMixin";

export default {
  mixins: [computedMixin],
  data() {
    return {
      frase: 'Que isso porra'
    }
  },
  filters: {
    virgula(frase) {
      return frase.replaceAll(' ', ',');
    },
    contaPalavra(frase) {
      const arr = frase.split(' ');
      const contagens = arr.map((palavra) => {
        return `${palavra} (${palavra.length})`;
      });

      return contagens.join(' ');
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
</style>
