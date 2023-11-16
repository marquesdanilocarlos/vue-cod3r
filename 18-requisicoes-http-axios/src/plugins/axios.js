import Vue from "vue";
import axios from 'axios';

//axios.defaults.baseURL = '';
//axios.defaults.headers.common['Authorization'] = 'abc123';
//axios.defaults.headers.get['Accepts'] = 'application.json'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-2c165-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": "abc123"
            }
        });
        Vue.prototype.$http.interceptors.request.use(config => {
                //console.log(config.method);
                return config;
            },
            error => Promise.reject(error));
        Vue.prototype.$http.interceptors.response.use(response => {
            const arr = [];
            for (let chave in response.data) {
                arr.push({id: chave, ...response.data[chave]})
            }
            response.data = arr;
            return response;
        }, error => Promise.reject(error));
    }
});