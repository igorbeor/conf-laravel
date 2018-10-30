<template>
    <v-layout>
        <v-flex lg8 md10 offset-lg2 offset-md1>
            <top-bar></top-bar>
            <v-card>
                <v-data-table
                        :headers="headers"
                        :items="participants"
                        hide-actions>
                    <template slot="items" slot-scope="props">
                        <td>
                            <v-avatar>
                                <img v-bind:src="`/storage/photos/${ props.item.photo != null ? props.item.photo : 'default.png' }`">
                            </v-avatar>
                        </td>
                        <td>{{ props.item.firstName + ' ' + props.item.lastName }}</td>
                        <td>{{ props.item.reportSubject }}</td>
                        <td>{{ props.item.email }}</td>
                        <td v-if="$auth.check(2)">
                            <input type="checkbox"
                                   :checked="props.item.hidden ? 'checked' : ''"
                                   v-on:click="hide(props.item.email)"
                            />
                        </td>
                    </template>
                    <template slot="footer">
                        <td>
                            <router-link to="/">
                                <v-flex justify-center>
                                    <v-icon large>chevron_left</v-icon>
                                </v-flex>
                            </router-link>
                        </td>
                    </template>
                </v-data-table>
            </v-card>
        </v-flex>
    </v-layout>
    <!--v-if="$auth.check(2)" IF ADMIN-->
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import {addParticipant, hideParticipant, setParticipants, updateParticipant} from '../store/action-types';
    import TopBar from '../components/TopBar';

    export default {
        components: {
          TopBar
        },
        data() {
            return {
                headers: [
                    {text: 'Photo', value: 'photo', sortable: false},
                    {text: 'Name', value: 'firstName', sortable: false},
                    {text: 'Report subject', value: 'reportSubject', sortable: false},
                    {text: 'Email', value: 'email'},
                    {text: '', align: 'right', sortable: false}
                ]
            }
        },
        computed: {
            participants: function () {
                if (!this.$auth.check(2)) {
                    return _.filter(this.getParticipants, participant => participant.hidden === 0);
                }
                return this.getParticipants;
            },
            ...mapGetters([
                'getParticipants'
            ])
        },
        mounted() {
            this.setParticipants()
        },
        methods: {
            hide: function (email) {
                this.hideParticipant(email);
            },
            ...mapActions({
                setParticipants,
                addParticipant,
                updateParticipant,
                hideParticipant
            })
        }

    }
</script>
