import {createApp} from 'vue';
import App from './App.vue';
import route from './route';
import 'bulma/bulma.sass';

createApp(App).use(route).mount('#app');
