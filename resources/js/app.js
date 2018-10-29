/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import * as VueGoogleMaps from 'vue2-google-maps'
import { store } from './store';
import { apiKey } from './config/gmaps.config';
import VueTelInput from 'vue-tel-input';
import reactiveStorage from "vue-reactive-storage";


Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueTelInput);
Vue.use(VueGoogleMaps, {
    load: {
        key: apiKey,
        libraries: 'places'
    }
});
// Set initial values
Vue.use(reactiveStorage, {
    "formNumber": "1",
    "email": ""
});

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import App from './components/App.vue';
// import Form from './components/Form.vue';
import Participants from './components/Participants.vue';
import Test from './components/Test.vue';
import RegistrationForm from './components/RegistrationForms';

// Vue.component('main-form', './components/Form');
// Vue.component('participants', './components/Participants.vue');
// Vue.component('test', './components/Test.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: RegistrationForm,
        },
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
    store,
    render: h => h(App),
    router
});
