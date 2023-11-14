<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando <strong>v-text</strong>'"></p>
    <p v-html="'Usando <strong>v-text</strong>'"></p>
    <hr>
    <p v-destaque="cor">Usando diretiva personalizada</p>
    <p v-destaque:fundo.atrasar="'goldenrod'">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	data(){
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
