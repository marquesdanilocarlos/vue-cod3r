import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, bind, vnode){
		el.style.backgroundColor = bind.value;
	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
