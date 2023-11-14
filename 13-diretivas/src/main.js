import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
    bind(el, bind, vnode) {

        if (bind.arg === 'fundo') {
            el.style.backgroundColor = bind.value;
            return;
        }

        el.style.color = bind.value;
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')
