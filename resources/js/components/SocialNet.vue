<template>
    <social-sharing url="http://tretyak-io.groupbwt.com/"
                    title="Check out this Meetup with SoCal AngularJS!"
                    hashtags="angularjs,javascript,framework"
                    inline-template>
        <v-container fluid>
            <v-layout column>
                <v-flex xs12>
        <v-layout align-center justify-center row fill-height
        class="social-net">
        <!--<v-flex row align-center justify-center>-->
            <v-flex xs2>
                    <network network="facebook" id="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Facebook
                    </network>
            </v-flex>
            <v-flex xs2>
                    <network network="googleplus" id="googleplus">
                        <i class="fa fa-fw fa-google-plus"></i> Google +
                    </network>
            </v-flex>
            <v-flex xs2>
                    <network network="twitter" id="twitter">
                        <i class="fa fa-fw fa-twitter"></i> Twitter
                    </network>
            </v-flex>
        <!--</v-flex>-->
        </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </social-sharing>
</template>

<script>
    export default {
        name: "SocialNet"
    }
</script>

<style scoped>

</style>