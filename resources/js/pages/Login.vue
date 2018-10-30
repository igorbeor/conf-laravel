<template>
    <v-layout>
        <v-flex lg4 sm6 offset-lg4 offset-sm3>
            <v-card>
                <v-toolbar card><div class="headline text-sm-center">Login</div></v-toolbar>
                <v-card-text>
                <div class="alert alert-danger" v-if="has_error">
                    <p>Invalid login data.</p>
                </div>
                <form autocomplete="off" @submit.prevent="login" method="post">
                    <v-text-field
                            v-model="email"
                            label="Email"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="password"
                            label="Password"
                            :append-icon="show ? 'visibility_off' : 'visibility'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            required
                    ></v-text-field>
                    <v-btn type="submit">Connection</v-btn>
                </form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                has_error: false,
                show: false
            }
        },
        mounted() {
            //
        },
        methods: {
            login() {
                var redirect = this.$auth.redirect()
                var app = this
                this.$auth.login({
                    params: {
                        email: app.email,
                        password: app.password
                    },
                    success: function() {
                        const redirectTo = redirect ? redirect.from.name : this.$auth.user().role === 2 ? 'admin.dashboard' : 'dashboard'
                        this.$router.push({name: redirectTo})
                    },
                    error: function() {
                        app.has_error = true
                    },
                    rememberMe: true,
                    fetchUser: true
                })
            }
        }
    }
</script>