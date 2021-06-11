import {createApp} from 'vue';
import App from './App.vue';
import route from './route';
import 'normalize.css';
import './asset/style.css';

createApp(App).use(route).mount('#app');
