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
                        label="Report subject"
                ></v-textarea>
            </form>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    company: '',
                    position: '',
                    aboutMe: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>