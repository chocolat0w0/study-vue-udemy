import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://study-vuejs-1df3d.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    // CROSS ORIGINで動かない
    // if (request.method === 'POST') {
    //     request.method = 'PUSH'
    // }
    next();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
