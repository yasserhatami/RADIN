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

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';






const app = createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(router)
  .use(vuetify)
  .mount('#app')
