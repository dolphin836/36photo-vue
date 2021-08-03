import {createApp} from 'vue'
import App from './App.vue'
import route from './route'
import 'bulma/bulma.sass'
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css'

createApp(App).use(route).mount('#app')
