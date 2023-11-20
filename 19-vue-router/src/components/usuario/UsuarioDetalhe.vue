<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p>
      <strong>Código:</strong>
      {{ id }}
    </p>
    <!--    <router-link :to="`/usuario/${id}/editar`" tag="button" primario>-->
    <router-link :to="{name: 'editarUsuario', params: {id}, query: {completo: false, lingua: 'en'}, hash: '#rodape'}" tag="button" primario>
      Editar
    </router-link>

  </div>
</template>

<script>
export default {
  name: "UsuarioDetalhe",
  props: ['id'],
  data() {
    return {
      //id: this.$route.params.id
    }
  },
}
</script>

<style scoped>

</style>