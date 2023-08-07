import './css/index.scss'
import 'materialize-css/dist/js/materialize.min.js'
import 'material-design-icons/iconfont/material-icons.css'
import 'v-calendar/style.css';
import 'jquery/dist/jquery.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')

