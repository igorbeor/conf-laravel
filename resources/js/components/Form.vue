<template>
    <v-content>
        <v-container>
            <form>
                <v-text-field
                        v-model="fields.first_name"
                        label="First name"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="fields.last_name"
                        label="Last name"
                        required
                ></v-text-field>
                <v-menu
                        input-activator
                        :close-on-content-click="false"
                        :return-value="fields.birthdate"
                        offset-y
                >
                    <v-text-field
                            slot="activator"
                            label="Birthdate"
                            v-model="fields.birthdate"
                            prepend-icon="event"
                            readonly
                    ></v-text-field>
                    <v-date-picker
                            v-model="fields.birthdate"
                            color="indigo"
                    ></v-date-picker>
                </v-menu>
                <v-textarea
                        v-model="fields.report_subject"
                        label="Report subject"
                ></v-textarea>
                <v-autocomplete
                        label="Country"
                        v-model="fields.country"
                        :items="countries"
                        item-text="name"
                        menu-props="offsetY"
                >
                    <template slot="item" slot-scope="data">
                        {{ data.item.name }}
                    </template>
                </v-autocomplete>
                    <v-text-field
                            v-model="fields.phone"
                            label="Phone number"
                            mask="phone"
                            required
                    ></v-text-field>
                <v-text-field
                        v-model="fields.email"
                        label="Email"
                        required
                ></v-text-field>

            </form>
        </v-container>
    </v-content>
</template>
<script>
    export default {
        data() {
            return {
                fields: {
                    first_name: '',
                    last_name: '',
                    birthdate: '',
                    report_subject: '',
                    country: '',
                    phone: '',
                    email: '',
                },
                BirthDateMenuVisibility: false,
                countries: []
            }
        },
        mounted() {
            this.getCountries();
        },
        methods: {
            getCountries() {
                axios.get('https://restcountries.eu/rest/v2/all')
                    .then(response => {
                        this.countries = _.map(response.data, (country) => {
                            return {
                                'name': country.name,
                                'code': country.callingCodes[0]
                            }
                        });
                        console.log(this.countries)
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        }
    }
</script>
