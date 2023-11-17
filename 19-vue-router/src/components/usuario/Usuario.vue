<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <p>
      <strong>Código:</strong>
      {{ id }}
    </p>
    <button sucesso @click="inicio">Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    inicio() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>