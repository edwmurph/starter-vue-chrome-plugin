import { createApp } from 'vue';
import App from '../components/devtools/index.vue';
chrome.devtools?.panels?.create( 'starter-vue-chrome-plugin', '', 'devtools.html' );
createApp( App ).mount('#app');

