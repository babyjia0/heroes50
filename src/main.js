import Vue from 'vue'
import App from './App.vue'

//导入全局样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/csss/index.css';

new Vue({
    el: '#app',
    render: h => h(App)
})