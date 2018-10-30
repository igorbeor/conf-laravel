/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
import 'es6-promise/auto';
import axios from 'axios';
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import VeeValidate from 'vee-validate'
import Vuex from 'vuex';
import * as VueGoogleMaps from 'vue2-google-maps';
import router from './router'
import store from './store';
import apiKey from './config/gmaps.config';
import auth from './config/auth';
import VueTelInput from 'vue-tel-input';
import reactiveStorage from "vue-reactive-storage";
import App from './components/App.vue';
const SocialSharing = require('vue-social-sharing');

window.Vue = Vue;

Vue.router = router;
Vue.use(VueRouter);

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.use(VeeValidate);
Vue.use(VueTelInput);
Vue.use(VueGoogleMaps, {
    load: {
        key: apiKey,
        libraries: 'places'
    }
});
Vue.use(reactiveStorage, {
    "formNumber": "1",
    "email": ""
});
Vue.use(SocialSharing);

// Set Vue authentication
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`;
Vue.use(VueAuth, auth);

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';

Vue.component('app', App);

const app = new Vue({
    el: '#app',
    store,
    router
});
