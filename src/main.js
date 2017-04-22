import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'


Vue.use(VueProgressBar,  {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
