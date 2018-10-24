<template>
    <v-layout>
        <v-flex lg8>
            <v-card>
                <v-data-table
                        :headers="headers"
                        :items="participants">
                    <template slot="items" slot-scope="props">
                        <td>
                            <v-avatar>
                                <img src="/storage/photos/default.png">
                            </v-avatar>
                        </td>
                        <td>{{ props.item.first_name + ' ' + props.item.last_name }}</td>
                        <td>{{ props.item.report_subject }}</td>
                        <td>{{ props.item.email }}</td>
                    </template>
                </v-data-table>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data()
        {
            return {
                headers: [
                    { text: 'Photo', value: 'photo' },
                    { text: 'Name', value: 'first_name'},
                    { text: 'Report subject', value: 'report_subject'},
                    { text: 'Email', value: 'email'}
                ],
                participant: {
                    photo: '',
                    first_name: '',
                    last_name: '',
                    report_subject: '',
                    email: ''
                },
                participants: [],
            }
        },
        mounted()
        {
            this.getParticipants();
        },
        methods: {
            getParticipants()
            {
                axios.get('/list')
                    .then(response => {
                        console.log(response);
                        this.participants = response.data;
                    })
                    .catch(error => {

                    })

            }
        }

    }
</script>