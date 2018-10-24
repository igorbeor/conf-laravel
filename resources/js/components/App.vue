<template>
    <!--<v-toolbar>-->
        <!--<v-toolbar-items class="hidden-sm-and-down">-->
            <!--<v-btn flat>Link One</v-btn>-->
            <!--<v-btn flat>Link Two</v-btn>-->
            <!--<v-btn flat>Link Three</v-btn>-->
        <!--</v-toolbar-items>-->
    <!--</v-toolbar>-->
    <!--<div>-->
        <!--<p>-->
            <!--<router-link :to="{ name: 'home' }">Home</router-link> |-->
            <!--<router-link :to="{ name: 'hello' }">Hello World</router-link>-->
        <!--</p>-->
<div>
    <div>
        <h2>APP!</h2>
    </div>
    <div class="container">
        <router-link to="/participants">Participants</router-link>
        <router-link to="/test">Test</router-link>
        <router-view></router-view>
    </div>
</div>
    <!--</div>-->
</template>
<script>
    export default {}
</script>
