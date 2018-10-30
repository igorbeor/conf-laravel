<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="16"
            style="width:100%;  height: 450px;"
        >
            <gmap-marker
                :position="center"
            ></gmap-marker>
        </gmap-map>
        <v-content>
            <v-container>
        <div class="headline text-sm-center px-3">To participate in the conference, please fill out the form</div>
                <v-flex pt-4>
        <v-badge>
            <span slot="badge">{{ participantsCount }}</span>
            <router-link to="/participants">All members</router-link>
        </v-badge>
                </v-flex>
            </v-container>
        <main-form v-if="localStorage.formNumber === '1'"></main-form>
        <additional-form v-if="localStorage.formNumber === '2'"></additional-form>
        <social-net v-if="localStorage.formNumber === '3'"></social-net>
        </v-content>
    </div>
</template>

<script>
    import MainForm from '../components/Form';
    import AdditionalForm from '../components/AdditionalForm';
    import SocialNet from '../components/SocialNet';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            MainForm,
            AdditionalForm,
            SocialNet
        },
        name: "RegistrationForms",
        data() {
            return {
                center: {lat: 34.1012441, lng: -118.3458723},
            }
        },
        computed: {
            participantsCount: function () {
                return _.filter(this.getParticipants, participant => participant.hidden === 0).length;
            },
            ...mapGetters([
                'getParticipants'
            ])
        }
    }
</script>

<style scoped>

</style>
