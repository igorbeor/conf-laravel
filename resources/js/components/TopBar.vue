<template>
    <v-toolbar dense>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$auth.check()" flat>
                <router-link to="/login">
                    Login
                </router-link>
            </v-btn>
            <v-btn v-if="$auth.check()"
                   @click.prevent="$auth.logout()"
                   flat>
                    Logout
            </v-btn>

        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>

</style>