<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
    <p>Nome do Usuário invertido: <strong>{{ nomeAlternativo }}</strong></p>
  </div>
</template>

<script>
export default {
  props: ['nome'],
  mounted() {
    this.inverterNome();
  },
  data(){
    return {
      nomeAlternativo: ''
    }
  },
  methods: {
    inverterNome() {
      this.nomeAlternativo = this.nome.split('').reverse().join('');
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
