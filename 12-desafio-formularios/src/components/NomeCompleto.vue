<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" @input="setNome" :value="value.nome">
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" @input="setSobreNome" :value="value.sobreNome">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "@/components/Rotulo.vue";

export default {
  name: "NomeCompleto",
  components: {Rotulo},
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    setNome(e){
      this.$emit('input', {nome: e.target.value, sobreNome: this.value.sobreNome});
    },
    setSobreNome(e){
      this.$emit('input', {nome: this.value.nome, sobreNome: e.target.value});
    },
  }
}
</script>

<style scoped>

</style>