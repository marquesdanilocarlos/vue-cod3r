import Vue from "vue";
import axios from 'axios';

axios.defaults.baseURL = 'https://curso-vue-2c165-default-rtdb.firebaseio.com/';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);
            return config;
        });
    }
});