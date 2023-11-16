import Vue from "vue";
import axios from 'axios';

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseUrl: 'https://curso-vue-2c165-default-rtdb.firebaseio.com/'
        });
    }
});