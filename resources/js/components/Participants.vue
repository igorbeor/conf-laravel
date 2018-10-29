<template>
    <v-layout>
        <v-flex lg8 offset-lg2>
            <v-card>
                <v-data-table
                        :headers="headers"
                        :items="getParticipants"
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
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { addParticipant, setParticipants, updateParticipant } from "../store/action-types";

    export default {
        data() {
            return {
                headers: [
                    {text: 'Photo', value: 'photo'},
                    {text: 'Name', value: 'firstName'},
                    {text: 'Report subject', value: 'reportSubject'},
                    {text: 'Email', value: 'email'}
                ]
            }
        },
        computed: {
            ...mapGetters([
                'getParticipants'
            ])
        },
        mounted() {
            this.setParticipants()
        },
        methods: {
            ...mapActions({
                setParticipants,
                addParticipant,
                updateParticipant
            })
        }

    }
</script>
