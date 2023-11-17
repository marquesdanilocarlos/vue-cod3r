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
  props:['id'],
  data() {
    return {
      //id: this.$route.params.id
    }
  },
  methods: {
    inicio() {
      this.$router.push('/');
    }
  },
  watch: {
    $route(to, from) {
      //this.id = to.params.id;
    }
  }
}
</script>

<style scoped>

</style>