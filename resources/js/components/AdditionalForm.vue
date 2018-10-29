<template>
    <v-content>
        <v-container>
            <form>
                <v-text-field
                        v-model="form.company"
                        :error-messages="companyErrors"
                        label="Company"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="form.position"
                        :error-messages="positionErrors"
                        label="Position"
                        required
                ></v-text-field>
                <v-textarea
                        v-model="form.aboutMe"
                        :error-messages="aboutMeErrors"
                        label="About me"
                ></v-textarea>
                <v-flex class="btn-row" row justify-end>
                    <v-btn @click="submit">Next</v-btn>
                </v-flex>
                <!-- Image upload: https://stackoverflow.com/questions/44989162/file-upload-in-vuetify-->
            </form>
        </v-container>
    </v-content>
</template>

<script>
    import { mapActions } from 'vuex';
    import { maxLength, minLength } from "vuelidate/lib/validators";
    import {updateParticipant} from "../store/action-types";

    export default {
        data() {
            return {
                form: {
                    company: '',
                    position: '',
                    aboutMe: ''
                }
            }
        },
        validations: {
            form: {
                company: {
                    minLength: minLength(2),
                    maxLength: maxLength(50)
                },
                position: {
                    minLength: minLength(2),
                    maxLength: maxLength(50)
                },
                aboutMe: {
                    minLength: minLength(10),
                    maxLength: maxLength(190)
                }
            }
        },
        computed: {
            companyErrors () {
                const errors = [];
                if (!this.$v.form.company.$dirty) return errors;
                !this.$v.form.company.minLength && errors.push('Company name must be at least 2 characters.');
                !this.$v.form.company.maxLength && errors.push('Company name must be at most 50 characters long.');
                return errors
            },
            positionErrors () {
                const errors = [];
                if (!this.$v.form.position.$dirty) return errors;
                !this.$v.form.position.minLength && errors.push('Position must be at least 2 characters.');
                !this.$v.form.position.maxLength && errors.push('Position must be at most 50 characters long.');
                return errors
            },
            aboutMeErrors () {
                const errors = [];
                if (!this.$v.form.aboutMe.$dirty) return errors;
                !this.$v.form.aboutMe.minLength && errors.push('About me be at least 10 characters.');
                !this.$v.form.aboutMe.maxLength && errors.push('About me must be at most 190 characters long.');
                return errors
            }
        },
        methods: {
            submit: function () {
                this.$v.form.$touch();
                if(this.$v.form.$error) {
                    console.log('Error validation');
                    return
                }
                this.updateParticipant(this.form);
                this.localStorage.formNumber = "2";
                this.localStorage.email = this.form.email;
            },
            ...mapActions({
                updateParticipant
            })
        }
    }
</script>

<style scoped>

</style>
