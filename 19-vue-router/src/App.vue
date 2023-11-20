<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <router-view name="menu"></router-view>

    <transition mode="out-in" enter-active-class="animated rubberBand" leave-active-class="animated rollOut">
      <router-view></router-view>
    </transition>
    <div id="rodape">
      <h3>Rodapé</h3>
    </div>

  </div>
</template>

<script>

export default {
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#rodape {
  margin-top: 1000px;
}
</style>
