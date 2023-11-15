<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <!--    <hr>-->
    <!--    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>-->

    <!--    <transition name="fade" appear>-->
    <!--      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>-->
    <!--    </transition>-->

    <!--    <transition name="slide" type="animation" appear>-->
    <!--      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>-->
    <!--    </transition>-->

    <!--    <transition-->
    <!--        enter-active-class="animated bounce"-->
    <!--        leave-active-class="animated shake"-->
    <!--        name="animated" type="animation" appear>-->
    <!--      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>-->
    <!--    </transition>-->

    <!--    <hr>-->
    <!--    <b-select v-model="tipoAnimacao" class="mb-4">-->
    <!--      <option value="fade">Fade</option>-->
    <!--      <option value="slide">Slide</option>-->
    <!--    </b-select>-->

    <!--    <transition :name="tipoAnimacao" mode="out-in">-->
    <!--      <b-alert variant="info" show v-if="exibir" key="alert-info">{{ msg }}</b-alert>-->
    <!--      <b-alert variant="warning" show v-else key="alert-warning">{{ msg }}</b-alert>-->
    <!--    </transition>-->
    <!--    <hr>-->
    <!--    <b-button variant="primary" class="mb-4" @click="mostrar = !mostrar">Alternar Caixa</b-button>-->

    <!--    <transition-->
    <!--        :css="false"-->
    <!--        @before-enter="beforeEnter"-->
    <!--        @enter="enter"-->
    <!--        @after-enter="afterEnter"-->
    <!--        @enter-cancelled="enterCancelled"-->

    <!--        @before-leave="beforeLeave"-->
    <!--        @leave="leave"-->
    <!--        @after-leave="afterLeave"-->
    <!--        @leave-cancelled="leaveCancelled"-->
    <!--    >-->
    <!--      <div class="caixa" v-if="mostrar"></div>-->
    <!--    </transition>-->

    <hr>
    <b-button @click="addAluno" class="mb-4">Add Aluno</b-button>

    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
      </b-list-group>
    </transition-group>

  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: "Mensagem de informação para usuário!",
      exibir: true,
      tipoAnimacao: 'fade',
      mostrar: false,
      larguraBase: 0,
      alunos: ["Marina", "Teresa", "Carla", "Joana"]
    }
  },

  methods: {
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;

        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },

    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
    },
    addAluno() {
      const s = Math.random().toString(36).substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
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
  font-size: 1.5rem;
}

.caixa {
  width: 300px;
  height: 100px;
  background: lightcoral;
  margin: 0 auto;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px)
  }
  to {
    transform: translateY(0px)
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px)
  }
  to {
    transform: translateY(40px)
  }
}
</style>
