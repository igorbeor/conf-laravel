<template>
    <v-content>
        <v-container>
            <form>
                <v-text-field
                        v-model="form.first_name"
                        label="First name"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="form.last_name"
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
                        v-model="form.report_subject"
                        label="Report subject"
                ></v-textarea>
                <v-autocomplete
                        label="Country"
                        v-model="form.country"
                        :items="getCountries"
                        item-text="name"
                        menu-props="offsetY"
                >
                    <template slot="item" slot-scope="data">
                        {{ data.item.name }}
                    </template>
                </v-autocomplete>
                    <v-text-field
                            v-model="form.phone"
                            label="Phone number"
                            mask="phone"
                            required
                    ></v-text-field>
                <v-text-field
                        v-model="form.email"
                        label="Email"
                        required
                ></v-text-field>
                <v-btn @click="submit">Next</v-btn>
            </form>
        </v-container>
    </v-content>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    import { addParticipant, setCountries } from '../store/action-types';
    import { required, minLength, maxLength, alpha, email, between, numeric } from 'vuelidate/lib/validators';

    // const minDate = new Date(1900,0,1);
    const maxDate = (new Date()).toISOString().slice(0,10); //TODO: fix max date in picker

    export default {
        data() {
            return {
                form: {
                    first_name: '',
                    last_name: '',
                    birthdate: '',
                    report_subject: '',
                    country: '',
                    phone: '',
                    email: ''
                },
                BirthDateMenuVisibility: false
            }
        },
        validations: {
            form: {
                first_name: {
                    required,
                    alpha,
                    minLength: minLength(2),
                    maxLength: maxLength(50)
                },
                last_name: {
                    required,
                    alpha,
                    minLength: minLength(2),
                    maxLength: maxLength(50)
                },
                birthdate: {
                    required,
                    // between: between('1900-01-01', '2018-10-26')
                },
                report_subject: {
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(190)
                },
                country: {
                    required,
                },
                phone: {
                    required,
                    numeric
                },
                email: {
                    required,
                    email
                }
            }
        },
        computed: {
            ...mapGetters([
                'getCountries'
            ])

        },
        mounted() {
            this.setCountries();
        },
        methods: {
            submit: function () {
                console.log(this.form);
                this.$v.form.$touch();
                if(this.$v.form.$error) {
                    console.log(this.$v.form.$error)
                    return
                }
                console.log('Data is valid.')
                console.log(minDate)
            },
            ...mapActions({
                setCountries,
                addParticipant

            })
        }
    }
</script>
