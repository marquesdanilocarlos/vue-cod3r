export default {
    state: {
        produtos: []
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
    },
    actions: {
        addProduto({commit}, payload) {
            setTimeout(() => {
                commit('addProduto', payload)
            }, 1000);
        }
    }
}