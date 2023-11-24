import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade: 4,
        preco: 7.99
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    },
    mutations: {
        addProduto(state, payload) {
            state.produtos.push(payload);
        },
        setQuantidade(state, payload) {
            state.quantidade = payload;
        },
        setPreco(state, payload) {
            state.preco = payload;
        }
    },
    actions: {
        addProduto({commit}, payload) {
            setTimeout(() => {
                commit('addProduto', payload)
            }, 1000);
        }
    }
});
