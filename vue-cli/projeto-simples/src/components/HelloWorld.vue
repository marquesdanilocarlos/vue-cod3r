<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="titulo += '!'">Alterar</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      titulo: 'Primeiro Compenente Vue'
    }
  },
  props: {
    msg: String
  }
}
</script>

