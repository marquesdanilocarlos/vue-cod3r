<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando <strong>v-text</strong>'"></p>
    <p v-html="'Usando <strong>v-text</strong>'"></p>
    <hr>
    <p v-destaque="cor">Usando diretiva personalizada</p>
    <p v-destaque:fundo.atrasar="'goldenrod'">Usando diretiva personalizada</p>
    <hr>
    <p v-destaque-local.atrasar="{cor1: 'green', atraso: 2000}">Usando diretiva personalizada</p>
    <p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 1000}">Usando diretiva personalizada</p>
  </div>
</template>

<script>
export default {
  directives: {
    'destaque-local': {
      bind(el, bind, vnode) {
        const aplicarCor = cor => {
          if (bind.arg === 'fundo') {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };

        let atraso = 0;
        if (bind.modifiers['atrasar']) {
          atraso = 1000;
        }

        const cor1 = bind.value.cor1;
        const cor2 = bind.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if (bind.modifiers['alternar']) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, bind.value.intervalo);
          } else {
            aplicarCor(bind.value.cor1)
          }
        }, atraso);
      }
    }
  },
  data() {
    return {
      cor: 'seagreen'
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
