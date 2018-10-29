<template>
    <v-content>
        <v-container>
            <form>
                <v-text-field
                        v-model="form.firstName"
                        :error-messages="firstNameErrors"
                        label="First name"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="form.lastName"
                        :error-messages="lastNameErrors"
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
                            :error-messages="birthdateErrors"
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
                        :error-messages="reportSubjectErrors"
                        label="Report subject"
                        box
                ></v-textarea>
                <v-autocomplete
                        label="Country"
                        v-model="form.country"
                        :error-messages="countryErrors"
                        :items="countries"
                        menu-props="offsetY"
                        @input="changeCode()"
                >
                    <template slot="item" slot-scope="data">
                        {{ data.item }}
                    </template>
                </v-autocomplete>
                <!--<div class="v-input v-text-field v-text-field&#45;&#45;enclosed v-text-field&#45;&#45;outline theme&#45;&#45;light">-->
                    <!--<div class="v-input__control">-->
                        <!--<div class="v-input__slot">-->
                            <!--<div class="v-text-field__slot">-->
                <!--<vue-tel-input v-model="form.phone"-->
                               <!--@onInput="onInput">-->
                <!--</vue-tel-input>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="v-text-field__details"><div class="v-messages theme&#45;&#45;light"><div class="v-messages__wrapper"></div></div></div>-->
                    <!--</div>-->
                <!--</div>-->
                <v-text-field
                        v-model="form.phone"
                        :error-messages="phoneErrors"
                        :prefix="phoneCode"
                        label="Phone number"
                        mask="## ### ####"
                        class="phone_number"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="form.email"
                        :error-messages="emailErrors"
                        label="Email"
                        required
                ></v-text-field>
                <v-flex class="btn-row" row justify-end>
                    <v-btn @click="submit">Next</v-btn>
                </v-flex>
            </form>
        </v-container>
    </v-content>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    import {addParticipant, setCountries, setParticipants} from '../store/action-types';
    import { required, minLength, maxLength, alpha, email, between, numeric } from 'vuelidate/lib/validators';

    export default {
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
        validations: {
            form: {
                firstName: {
                    required,
                    alpha,
                    minLength: minLength(2),
                    maxLength: maxLength(50)
                },
                lastName: {
                    required,
                    alpha,
                    minLength: minLength(2),
                    maxLength: maxLength(50)
                },
                birthdate: {
                    required
                },
                reportSubject: {
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(190)
                },
                country: {
                    required,
                },
                phone: {
                    required
                },
                email: {
                    required,
                    email, // TODO: Fix validation
                    // isUnique(value) {
                    //     if (value === '') return true;
                    //
                    //     return new Promise((resolve, reject) => {
                    //         let existingEmails = this.getParticipants.map(participant => participant.email);
                    //         setTimeout(() => {
                    //             resolve(!existingEmails.includes(value));
                    //         }, 350 + Math.random() * 300)
                    //     });
                    // }
                }
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
            // existingEmails: function () {
            //     return this.getParticipants.map(participant => participant.email)
            // },
            firstNameErrors () {
                const errors = [];
                if (!this.$v.form.firstName.$dirty) return errors;
                !this.$v.form.firstName.alpha && errors.push('The first name must consist of letters only.');
                !this.$v.form.firstName.minLength && errors.push('First name must be at least 2 characters.');
                !this.$v.form.firstName.maxLength && errors.push('First name must be at most 50 characters long.');
                !this.$v.form.firstName.required && errors.push('First name is required.');
                return errors
            },
            lastNameErrors () {
                const errors = [];
                if (!this.$v.form.lastName.$dirty) return errors;
                !this.$v.form.lastName.alpha && errors.push('The last name must consist of letters only.');
                !this.$v.form.lastName.minLength && errors.push('Last name must be at least 2 characters.');
                !this.$v.form.lastName.maxLength && errors.push('Last name must be at most 50 characters long.');
                !this.$v.form.lastName.required && errors.push('Last name is required.');
                return errors
            },
            birthdateErrors () {
                const errors = [];
                if (!this.$v.form.birthdate.$dirty) return errors;
                !this.$v.form.birthdate.required && errors.push('Birthdate is required.');
                return errors
            },
            reportSubjectErrors () {
                const errors = [];
                if (!this.$v.form.reportSubject.$dirty) return errors;
                !this.$v.form.reportSubject.minLength && errors.push('Report subject must be at least 10 characters.');
                !this.$v.form.reportSubject.maxLength && errors.push('Report subject must be at most 190 characters long.');
                !this.$v.form.reportSubject.required && errors.push('Report subject is required.');
                return errors
            },
            countryErrors () {
                const errors = [];
                if (!this.$v.form.country.$dirty) return errors;
                !this.$v.form.country.required && errors.push('Country subject is required.');
                return errors
            },
            phoneErrors () {
                const errors = [];
                if (!this.$v.form.phone.$dirty) return errors;
                !this.$v.form.phone.required && errors.push('Phone number subject is required.');
                return errors
            },
            emailErrors () {
                const errors = [];
                if (!this.$v.form.email.$dirty) return errors;
                !this.$v.form.email.email && errors.push('Must be valid email.');
                !this.$v.form.email.required && errors.push('Email subject is required.');
                // !this.$v.form.email.isUnique && errors.push('Email must be unique.');
                return errors
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
            submit: function () {
                console.log(this.form);
                this.$v.form.$touch();
                if(this.$v.form.$error) {
                    console.log('Error validation');
                    return
                }
                this.addParticipant(this.form);
                this.localStorage.formNumber = "2";
                this.localStorage.email = this.form.email;
            },
            onInput({ number, isValid, country }) {
                console.log(number, isValid, country);
            },
            ...mapActions({
                setCountries,
                addParticipant,
                setParticipants
            })
        }
    }
</script>
