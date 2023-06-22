import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import App1 from "./apps/app1.js";

window.addEventListener("DOMContentLoaded", function() {
    createApp(App1).mount('#app1');
})