<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
    <p>Nome do Usuário invertido: <strong>{{ inverterNome() }}</strong></p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
      default: "Danilo"
    }
  },
  data(){
    return {
    }
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('');
    },
    reiniciarNome(){
      let antigo = this.nome;
      this.nome = 'Pedro';
      this.$emit('nomeMudou', {antigo, novo: this.nome});
    }
  }
}
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
