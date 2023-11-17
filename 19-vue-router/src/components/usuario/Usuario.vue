<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr>
    <router-view/>
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