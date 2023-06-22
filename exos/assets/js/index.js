import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import  App1  from "./apps/app1.js";
import App2 from "./apps/app2.js";
import App3 from "./apps/app3.js";
import App4 from "./apps/app4.js";

window.addEventListener("DOMContentLoaded", function(){
    createApp(App1).mount('#app1');
    createApp(App2).mount('#app2');
    createApp(App3).mount('#app3');
    createApp(App4).mount('#app4');
});