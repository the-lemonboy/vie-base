import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
{{#if_eq import "full"}}
import {{alias}} from '{{UI}}'
import '{{css}}'

// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
const app = createApp(App)
{{/if_eq}}
{{#if_eq import "full"}}
app.use({{alias}})
{{/if_eq}}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
