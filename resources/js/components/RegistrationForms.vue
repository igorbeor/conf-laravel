<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="12"
            style="width:100%;  height: 400px;"
        >
            <gmap-marker
                :position="center"
            ></gmap-marker>
        </gmap-map>
        <main-form v-if="localStorage.formNumber === '1'"></main-form>
        <additional-form v-if="localStorage.formNumber === '2'"></additional-form>
    </div>
</template>

<script>
    import MainForm from './Form';
    import AdditionalForm from './AdditionalForm';

    export default {
        components: {
            MainForm,
            AdditionalForm
        },
        name: "RegistrationForms",
        data() {
            return {
                center: {lat: 34.1012441, lng: -118.3458723},
            }
        }
    }
</script>

<style scoped>

</style>
