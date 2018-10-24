require('./bootstrap');

window.Vue = require('vue');
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(Vuetify);


// import router from './router';

// Vue.component('participant', require('./components/ParticipantComponent'));
Vue.component('participants', require('./components/ParticipantListCompopnent.vue'));