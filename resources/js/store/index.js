import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = Vuex.Store({
    state: {
        participants: [],
    },
    getters: {
        PARTICIPANTS: state => {
            return state.participants;
        }
    },
    mutations: {
        MUTATE_SET_PARTICIPANTS: (state, payload) => {
            state.participants = payload;
        },
        MUTATE_ADD_PARTICIPANT: (state, payload) => {
            state.participants.push(payload);
        },
        MUTATE_UPDATE_PARTICIPANT: (state, payload, email) => {
            var index = _.findIndex(state.participants, {email: email});
            state.participants.splice(index, 1, payload);
        }
    },
    actions: {
        SET_PARTICIPANTS: async (context, payload) => {
            const headers = {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
            };
            try{
                var {data} = await axios.get('/api/list', headers);
            } catch (error) {
                console.log(error);
            }
            context.commit('SET_PARTISIPANTS', data);
            console.log('Success!');
            console.log(data);
        },
        ADD_PARTICIPANTS: async (context, payload) => {
            const headers = {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
            };
            try {
                var {data} = await axios.post('/api/participant/store', payload, headers);
            } catch (error) {
                console.log(error);
            }
            context.commit('ADD_PARTISIPANTS', data);
            console.log('Success!');
        },
        UPDATE_PARTICIPANT: async (context, payload) => {
            const headers = {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
            };
            try {
                var {data} = await axios.get('/api/participant/store', payload, headers);
            } catch (error) {
                console.log(error);
            }
            context.commit('ADD_PARTISIPANTS', data);
            console.log('Success!');
        }
    }
});