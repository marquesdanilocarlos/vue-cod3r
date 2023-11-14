import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
    bind(el, bind, vnode) {

        let atraso = 0;
        if (bind.modifiers['atrasar']) {
            atraso = 3000;
        }

        setTimeout(() => {
            if (bind.arg === 'fundo') {
                el.style.backgroundColor = bind.value;
            } else {
                el.style.color = bind.value;
            }
        }, atraso);
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')
