<template>
    <v-content>
        <v-container>
            <form>
                <v-text-field
                        v-model="form.company"
                        v-validate="'min:2|max:50'"
                        :error-messages="errors.collect('company')"
                        data-vv-name="company"
                        label="Company"
                ></v-text-field>
                <v-text-field
                        v-model="form.position"
                        v-validate="'min:2|max:50'"
                        :error-messages="errors.collect('position')"
                        data-vv-name="position"
                        label="Position"
                ></v-text-field>
                <v-textarea
                        v-model="form.aboutMe"
                        v-validate="'min:10|max:190'"
                        :error-messages="errors.collect('aboutMe')"
                        data-vv-name="aboutMe"
                        label="About me"
                ></v-textarea>
                <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                <input
                        type="file"
                        style="display: none"
                        ref="image"
                        accept="image/*"
                        @change="onFileChange"
                >
                <v-flex class="btn-row" row justify-end>
                    <v-btn @click="submit">Next</v-btn>
                </v-flex>
            </form>
        </v-container>
    </v-content>
</template>

<script>
    import { mapActions } from 'vuex';
    import { maxLength, minLength } from "vuelidate/lib/validators";
    import {updateParticipant} from "../store/action-types";

    export default {
        $_veeValidate: {
            validator: 'new'
        },
        data() {
            return {
                form: {
                    company: '',
                    position: '',
                    aboutMe: '',
                    email: '',
                    photo: ''
                },
                imageName: ''
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.form.email = this.localStorage.email;
                        this.updateParticipant(this.form);
                        this.localStorage.formNumber = "3";
                        return;
                    }

                    console.log('Correct them errors!');
                });
            },
            pickFile () {
                this.$refs.image.click ()
            },
            // onFilePicked (e) {
            //     const files = e.target.files;
            //     if(files[0] !== undefined) {
            //         this.imageName = files[0].name;
            //         if(this.imageName.lastIndexOf('.') <= 0) {
            //             return;
            //         }
            //         const fr = new FileReader ();
            //         fr.readAsDataURL(files[0]);
            //         fr.addEventListener('load', () => {
            //             this.form.photo = files;
            //         })
            //     } else {
            //         this.imageName = '';
            //         this.form.photo = '';
            //     }
            // },
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var reader = new FileReader();
                // var vm = this;

                reader.onload = (e) => {
                    this.form.photo = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            ...mapActions({
                updateParticipant
            })
        }
    }
</script>

<style scoped>

</style>
