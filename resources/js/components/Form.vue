<template>
        <v-container>
            <form>
                <v-text-field
                        v-model="form.firstName"
                        v-validate="'required|alpha|min:2|max:50'"
                        :error-messages="errors.collect('firstName')"
                        data-vv-name="firstName"
                        label="First name"
                ></v-text-field>
                <v-text-field
                        v-model="form.lastName"
                        v-validate="'required|alpha|min:2|max:50'"
                        :error-messages="errors.collect('lastName')"
                        data-vv-name="lastName"
                        label="Last name"
                        required
                ></v-text-field>
                <v-menu
                        input-activator
                        :close-on-content-click="false"
                        :return-value="form.birthdate"
                        offset-y
                >
                    <v-text-field
                            slot="activator"
                            label="Birthdate"
                            v-model="form.birthdate"
                            v-validate="'required'"
                            :error-messages="errors.collect('birthdate')"
                            data-vv-name="birthdate"
                            prepend-icon="event"
                            readonly
                    ></v-text-field>
                    <v-date-picker
                            v-model="form.birthdate"
                            color="indigo"
                            min="1900-01-01"
                            :max="maxDate"
                    ></v-date-picker>
                </v-menu>
                <v-textarea
                        v-model="form.reportSubject"
                        v-validate="'required|min:10|max:190'"
                        :error-messages="errors.collect('reportSubject')"
                        data-vv-name="reportSubject"
                        label="Report subject"
                        box
                ></v-textarea>
                <v-autocomplete
                        label="Country"
                        v-model="form.country"
                        v-validate="'required'"
                        :error-messages="errors.collect('country')"
                        data-vv-name="country"
                        :items="countries"
                        menu-props="offsetY"
                        @input="changeCode()"
                >
                    <template slot="item" slot-scope="data">
                        {{ data.item }}
                    </template>
                </v-autocomplete>
                <v-text-field
                        v-model="form.phone"
                        v-validate="'required|numeric'"
                        :error-messages="errors.collect('phone')"
                        data-vv-name="phone"
                        :prefix="phoneCode"
                        label="Phone number"
                        mask="## ### ####"
                        class="phone_number"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="form.email"
                        v-validate="'required|email'"
                        :error-messages="errors.collect('email')"
                        data-vv-name="email"
                        label="Email"
                        required
                ></v-text-field>
                <v-flex class="btn-row" row justify-end>
                    <v-btn @click="submit">Next</v-btn>
                </v-flex>
            </form>
        </v-container>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    import {addParticipant, setCountries, setParticipants} from '../store/action-types';

    export default {
        $_veeValidate: {
            validator: 'new'
        },
        data() {
            return {
                form: {
                    firstName: '',
                    lastName: '',
                    birthdate: '',
                    reportSubject: '',
                    country: '',
                    phone: '',
                    email: ''
                },
                BirthDateMenuVisibility: false,
                maxDate: (new Date()).toISOString().slice(0,10),
                phoneCode: '+1'
            }
        },
        computed: {
            ...mapGetters([
                'getCountries',
                'getParticipants'
            ]),
            countries: function () {
                return this.getCountries.map(country => country.name);
            },
        },
        mounted() {
            this.setCountries();
            this.setParticipants();
        },
        methods: {
            changeCode: function () {
                this.phoneCode = '+' + _.filter(this.getCountries, (c) => { return c.name === this.form.country })[0].code;
            },
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.addParticipant(this.form);
                        this.localStorage.formNumber = "2";
                        this.localStorage.email = this.form.email;
                        return;
                    }

                    console.log('Correct them errors!');
                });
            },
            ...mapActions({
                setCountries,
                addParticipant,
                setParticipants
            })
        }
    }
</script>
