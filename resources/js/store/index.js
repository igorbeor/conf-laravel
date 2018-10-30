import Vue from 'vue';
import Vuex from 'vuex';
import {
    MUTATE_ADD_PARTICIPANT, MUTATE_HIDE_PARTICIPANT,
    MUTATE_SET_COUNTRIES,
    MUTATE_SET_PARTICIPANTS,
    MUTATE_UPDATE_PARTICIPANT
} from "./mutation-types";
import {addParticipant, hideParticipant, setCountries, setParticipants, updateParticipant} from "./action-types";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        participants: [],
        countries: [],
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
        [MUTATE_HIDE_PARTICIPANT] (state, payload) {
            let index = _.findIndex(state.participants, {email: payload});
            let participant = state.participants[index];
            participant['hidden'] = participant['hidden'] === 0 ? 1 : 0;
            state.participants.splice(index, 1, participant);
        }
    },
    actions: {
        async [setParticipants] (context, payload) {
            let data;
            try{
                ({ data } = await axiosAPI.get('/list'));
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_SET_PARTICIPANTS', data);
        },
        async [addParticipant] (context, payload) {
            let data;
            try {
                ({ data } = await axiosAPI.post('/participant/store', payload));
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_ADD_PARTICIPANT', data);
        },
        async [updateParticipant] (context, payload) {
            let data;
            try {
                ({ data } = await axiosAPI.post('/participant/update', payload));
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_UPDATE_PARTICIPANT', data);
        },
        async [setCountries] (context, payload) {
            let countries;
            try{
                let { data } = await axiosClear.get('https://restcountries.eu/rest/v2/all');
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
        },
        async [hideParticipant] (context, payload) {
            let sendData = {email: payload}
            let data;
            try {
                ({ data } = await axiosAPI.post('/participant/hide', sendData));
            } catch (error) {
                console.log(error);
            }
            context.commit('MUTATE_HIDE_PARTICIPANT', payload);
        }
    }
});

export default store;
