import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from "@/router/index";


//import vuetify
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
loadFonts()

//import sass
import '@/assets/sass/main.scss'

import axios from 'axios'
import VueAxios from 'vue-axios'

import store  from './store/index.js';

const app = createApp(App);
app.use(router)
  .use(VueAxios, axios)
  .use(store)
  .use(vuetify)
  .mount('#app')
