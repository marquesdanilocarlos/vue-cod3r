<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">
      {{ mensagem.texto }}
    </b-alert>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome"></b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o email"></b-form-input>
      </b-form-group>
      <hr>
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="obter" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome: </strong>{{ usuario.nome }}<br/>
        <strong>Email: </strong>{{ usuario.email }}<br/>
        <strong>ID: </strong>{{ usuario.id }}<br/>
        <b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
        <b-button variant="danger" size="lg" class="ml-2" @click="excluir(usuario.id)">Excluir</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      id: null,
      usuario: {
        nome: '',
        email: ''
      },
      mensagens: []
    }
  },
  methods: {
    limpar() {
      this.usuario = {};
      this.id = null;
      this.mensagens = [];
    },
    salvar() {
      const method = this.id !== null ? 'patch' : 'post';
      const finalUrl = this.id !== null ? `${this.usuario.id}.json` : '.json';

      this.$http[method](`/usuarios/${finalUrl}`, this.usuario)
          .then(response => {
            this.limpar();
            this.mensagens.push({
              texto: 'Operação realizada com sucesso!',
              tipo: 'success'
            });
          });
    },
    obter() {
      this.$http.get('usuarios.json')
          .then(response => {
            //console.log(response);
            this.usuarios = response.data
          })
    },
    carregar(id) {
      this.id = id;
      this.usuario = {...this.usuarios[id]}
    },
    excluir(id) {
      this.$http.delete(`/usuarios/${id}.json`)
          .then(response => this.limpar())
          .catch(error => {
            this.mensagens.push({
              texto: 'Erro ao realizar operação!',
              tipo: 'danger'
            })
          });
    }
  },
  watch: {
    usuarios() {
      console.log(this.usuarios)
    }
  }
  /*created(){
    this.$http.post('usuarios.json', {
      nome: 'Maria',
      email: 'maria@gmail.com'
    }).then(res => console.log(res));
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
