import Vue from 'vue';
import Vuex from 'vuex';
import {
    MUTATE_ADD_PARTICIPANT,
    MUTATE_SET_COUNTRIES,
    MUTATE_SET_PARTICIPANTS,
    MUTATE_UPDATE_PARTICIPANT
} from "./mutation-types";
import { addParticipant, setCountries, setParticipants, updateParticipant } from "./action-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        participants: [],
        participant: {
            first_name: '',
            last_name: '',
            birthdate: '',
            report_subject: '',
            country: '',
            phone: '',
            email: ''
        },
        countries: []
    },
    getters: {
        getParticipants (state) {
            return state.participants;
        },
        getCountries (state) {
            return state.countries;
        }
    },
    mutations: {
        [MUTATE_SET_PARTICIPANTS] (state, payload) {
            state.participants = payload;
        },
        [MUTATE_ADD_PARTICIPANT] (state, payload) {
            state.participants.push(payload);
        },
        [MUTATE_UPDATE_PARTICIPANT] (state, payload, email) {
            let index = _.findIndex(state.participants, {email: email});
            state.participants.splice(index, 1, payload);
        },
        [MUTATE_SET_COUNTRIES] (state, payload) {
            state.countries = payload;
        },
    },
    actions: {
        async [setParticipants] (context, payload) {
            const headers = {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
            };
            let data;
            try{
                ({ data } = await axios.get('/api/list', headers));
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_SET_PARTICIPANTS', data);
            console.log('Success!');
            console.log(data);
        },
        async [addParticipant] (context, payload) {
            const headers = {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
            };
            let data;
            try {
                ({ data } = await axios.post('/api/participant/store', payload, headers));
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_ADD_PARTICIPANT', data);
            console.log('Success!');
        },
        async [updateParticipant] (context, payload) {
            const headers = {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
            };
            let data;
            try {
                ({ data } = await axios.get('/api/participant/store', payload, headers));
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_UPDATE_PARTICIPANT', data);
            console.log('Success!');
        },
        async [setCountries] (context, payload) {
            let countries;
            try{
                let { data } = await axios.get('https://restcountries.eu/rest/v2/all');
                countries = _.map(data, (country) => {
                    return {
                        'name': country.name,
                        'code': country.callingCodes[0]
                    }
                });
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_SET_COUNTRIES', countries);
            console.log('Success!');
            console.log(countries);
        },
    }
});