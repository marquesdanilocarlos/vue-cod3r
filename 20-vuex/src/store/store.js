import Vue from "vue";
import Vuex from "vuex";
import carrinho from "@/store/modules/carrinho";
import parametros from "@/store/modules/parametros";
import * as globalGetters from "@/store/globalGetters";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        nome: 'Danilo',
        sobreNome: 'Marques'
    },
    getters: {
        ...globalGetters
    },
    modules: {
        carrinho,
        parametros
    }
});
