import {createApp} from 'vue'
import App from './App.vue'
import { route } from './route'
import 'bulma/bulma.sass'
import './asset/app.sass'
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(route).mount('#app')
