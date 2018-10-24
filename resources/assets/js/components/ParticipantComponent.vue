<template>
    <v-data-table
            :headers
            :items="participants">
        <template slot="items" slot-scope="props">
            <td>
                <v-avatar>
                    <img v-bind:src="'/storage/photos/' + props.item.photo ? props.item.photo : 'default.png'">
                </v-avatar>
            </td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.report_subject }}</td>
            <td>{{ props.item.email }}</td>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        data()
        {
            return {
                headers: [
                    { text: 'Photo', value: 'photo' },
                    { text: 'Name', value: 'name'},
                    { text: 'Report subject', value: 'report_subject'},
                    { text: 'Email', value: 'email'}
                ],
                participant: {
                    photo: '',
                    name: '',
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
                        this.participants = response.data.participants;
                    })
                    .catch(error => {

                    })

            }
        }

    }
</script>
