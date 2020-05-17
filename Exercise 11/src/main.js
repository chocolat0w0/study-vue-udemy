import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('count', function(value) {
    return value + ' (' + value.length + ')';
})

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    },
    computed: {
        countedText() {
            return this.text + ' (' + this.text.length + ')'
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
