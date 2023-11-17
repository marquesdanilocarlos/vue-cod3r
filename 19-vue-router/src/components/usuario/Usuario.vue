<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <button sucesso @click="inicio">Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
    inicio() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>