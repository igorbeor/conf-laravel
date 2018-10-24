/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.devtools = true;
Vue.config.performance = true;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './components/App.vue';
import Participants from './components/Participants.vue';
import Test from './components/Test.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/participants',
            component: Participants,
        },
        {
            path: '/test',
            component: Test,
        }
    ],
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});
