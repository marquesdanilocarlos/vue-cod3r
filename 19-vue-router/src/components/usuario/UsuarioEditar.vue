<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p>
      <strong>Código:</strong>
      {{ id }}
    </p>
    <p>
      <strong>Completo:</strong>
      {{ $route.query.completo ? 'Sim' : 'Não' }}
    </p>
    <p>
      <strong>Língua:</strong>
      {{ $route.query.lingua }}
    </p>
    <button @click="confirmado = true">Confirmar</button>
    </div>
</template>

<script>
export default {
  name: "UsuarioEditar",
  props: ['id'],
  data() {
    return {
      confirmado: false
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('Antes de entrar na rota de usuário editar.');
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmado) {
      next();
      return;
    }

    let leaveConfirm = confirm("Deseja realmente sair?");

    leaveConfirm ? next() : next(false);
  },
}
</script>

<style scoped>

</style>