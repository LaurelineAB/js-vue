import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import App1 from "./apps/app1.js";
import App2 from "./apps/app2.js";

window.addEventListener("DOMContentLoaded", function() {
    createApp(App1).mount('#app1');
    createApp(App2).mount('#app2');
})